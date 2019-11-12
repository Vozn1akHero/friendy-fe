import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, concatMap, exhaustMap, filter, mergeMap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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

  @Effect()
  profilePageGetUserPosts = this.actions$.pipe(
    ofType(UserPostsActions.GET_USER_POSTS),
    withLatestFrom(this.store$.select(state => state.profilePageUserPosts.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded
    }),
    mergeMap(([{payload}] : any) => {
      return this.userPostService.getByUserId(payload.userId, 0)
        .pipe(
          map(res => {
            let posts : Post[] = res.body as Post[];
            return ({ type: UserPostsActions.SET_USER_POSTS,
              payload: posts })
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
              payload: payload.payload.id })
          })
        )
    })
  );

  @Effect()
  profilePageLikePost = this.actions$.pipe(
    ofType(UserPostsActions.LIKE_POST_START),
    switchMap((payload: UserPostsActions.LikePostStart) => {
      return this.userPostService.like(payload.payload.id)
        .pipe(
          map(res => {
            return ({ type: UserPostsActions.LIKE_POST, payload: res })
          })
        )
    })
  );

  @Effect()
  profilePageUnlikePost = this.actions$.pipe(
    ofType(UserPostsActions.UNLIKE_POST_START),
    switchMap((payload: UserPostsActions.UnlikePostStart) => {
      return this.userPostService.unlike(payload.payload.id)
        .pipe(
          map(res => {
            return ({ type: UserPostsActions.UNLIKE_POST, payload: res })
          })
        )
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
