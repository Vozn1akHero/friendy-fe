import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, map, tap, withLatestFrom, filter, mergeMap} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import * as UserPostsActions from './user-posts.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {UserPostService} from '../../services/user-post.service';
import Post from '../../models/post.model';


@Injectable()
export class UserPostsEffects {
  @Effect()
  profilePageAddPost = this.actions$.pipe(
    ofType(UserPostsActions.ADD_POST),
    switchMap((addPostStart: UserPostsActions.AddPost) => {
      return this.userPostService.create(addPostStart.payload)
        .pipe(
          map(res => {
            return ({ type: UserPostsActions.SET_ADDED_POST, payload: res.body })
          })
        )
    })
  );

  buildPosts(res: any[]){
    let posts : Post[] = [];
    res.map(value => {
      posts.push(new Post(value.id,
        value.userId,
        value.avatar,
        value.content,
        value.imagePath,
        value.likesCount,
        value.commentsCount,
        value.postId,
        value.isPostLikedByUser,
        value.date))
    });
    return posts;
  }

  @Effect()
  profilePageGetUserPosts = this.actions$.pipe(
    ofType(UserPostsActions.GET_USER_POSTS),
    withLatestFrom(this.store$.select(e => e.profilePageUserPosts.posts)),
    switchMap(([action, posts] : [UserPostsActions.GetUserPosts, any[]]) => {
      return this.userPostService.getLast(action.payload.userId, 5)
        .pipe(
          map((res: HttpResponse<any[]>) => {
            return ({ type: UserPostsActions.SET_USER_POSTS,
              payload: this.buildPosts(res.body) })
          })
        )
    })
  );

  @Effect()
  startFulfillingUserPosts = this.actions$.pipe(
    ofType(UserPostsActions.START_FULFILLING_USER_POSTS),
    withLatestFrom(this.store$.select(e => e.profilePageUserPosts.posts)),
    switchMap(([action, posts] : [UserPostsActions.GetUserPosts, Post[]]) => {
      return this.userPostService.getByUserId(action.payload.userId, posts[posts.length - 1].id,5)
        .pipe(
          map((res: HttpResponse<any[]>) => {
            return ({ type: UserPostsActions.FULFILL_USER_POSTS,
              payload: this.buildPosts(res.body) })
          })
        )
    })
  );

  @Effect()
  profilePageRemovePost = this.actions$.pipe(
    ofType(UserPostsActions.REMOVE_POST),
    switchMap((payload: UserPostsActions.RemovePost) => {
      return this.userPostService.delete(payload.payload.id)
        .pipe(
          map(() => {
            return ({ type: UserPostsActions.REMOVE_POST_FROM_STATE,
              payload: {id: payload.payload.id} })
          })
        )
    })
  );

  @Effect({dispatch: false})
  profilePageLikePost = this.actions$.pipe(
    ofType(UserPostsActions.LIKE_POST),
    switchMap((payload: UserPostsActions.LikePost) => {
      return this.userPostService.like(payload.payload.id)
    })
  );

  @Effect({dispatch: false})
  profilePageUnlikePost = this.actions$.pipe(
    ofType(UserPostsActions.UNLIKE_POST),
    switchMap((payload: UserPostsActions.UnlikePost) => {
      return this.userPostService.unlike(payload.payload.id)
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private userPostService: UserPostService,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
