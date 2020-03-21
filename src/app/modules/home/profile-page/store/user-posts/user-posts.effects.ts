import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import {
  switchMap,
  map,
  withLatestFrom,
  filter,
  mergeMap
} from "rxjs/operators";
import { HttpResponse } from "@angular/common/http";
import * as UserPostActions from "./user-posts.actions";
import { Store } from "@ngrx/store";
import { UserPostService } from "../../services/user-post.service";
import Post from "../../models/post.model";
import { AppState } from "../reducers";
import { of } from "rxjs";

@Injectable()
export class UserPostsEffects {
  @Effect()
  profilePageAddPost = this.actions$.pipe(
    ofType(UserPostActions.ADD_POST),
    switchMap((action: UserPostActions.AddPost) => {
      return this.userPostService.create(action.payload.post).pipe(
        map(res => {
          return {
            type: UserPostActions.SET_ADDED_POST,
            payload: {
              id: action.payload.id,
              post: res
            }
          };
        })
      );
    })
  );

  buildPosts(res: any[]) {
    let posts: Post[] = [];
    res.map(value => {
      posts.push(
        new Post(
          value.id,
          value.userId,
          value.avatar,
          value.content,
          value.imagePath,
          value.likesCount,
          value.commentsCount,
          value.postId,
          value.isPostLikedByUser,
          value.date
        )
      );
    });
    return posts;
  }

  @Effect()
  profilePageGetUserPosts = this.actions$.pipe(
    ofType<UserPostActions.GetUserPosts>(UserPostActions.GET_USER_POSTS),
    withLatestFrom(this.store$.select(e => e.profilePageUserPosts.loaded)),
    filter(([action, loaded]) => !loaded[action.payload.userId]),
    mergeMap(([{ payload }]) => {
      return this.userPostService
        .getWithPagination(payload.userId, payload.page)
        .pipe(
          map((res: HttpResponse<any[]>) => {
            const posts = this.buildPosts(res.body);
            return new UserPostActions.SetUserPosts({
              id: payload.userId,
              posts
            });
          })
        );
    })
  );

  @Effect() fulfillPosts = this.actions$.pipe(
    ofType(UserPostActions.START_FULFILLING),
    switchMap((action: UserPostActions.StartFulfilling) => {
      return this.userPostService
        .getWithPagination(action.payload.id, action.payload.page)
        .pipe(
          map((res: HttpResponse<any[]>) => {
            const posts = this.buildPosts(res.body);
            return new UserPostActions.FulfillUserPosts({
              id: action.payload.id,
              posts
            });
          })
        );
    })
  );

  @Effect()
  profilePageRemovePost = this.actions$.pipe(
    ofType(UserPostActions.REMOVE_POST),
    switchMap((payload: UserPostActions.RemovePost) => {
      return this.userPostService.delete(payload.payload.id).pipe(
        map(() => {
          return {
            type: UserPostActions.REMOVE_POST_FROM_STATE,
            payload: { id: payload.payload.id }
          };
        })
      );
    })
  );

  @Effect({ dispatch: false })
  profilePageLikePost = this.actions$.pipe(
    ofType(UserPostActions.LIKE_POST),
    switchMap((payload: UserPostActions.LikePost) => {
      return this.userPostService.like(payload.payload.id);
    })
  );

  @Effect({ dispatch: false })
  profilePageUnlikePost = this.actions$.pipe(
    ofType(UserPostActions.UNLIKE_POST),
    switchMap((payload: UserPostActions.UnlikePost) => {
      return this.userPostService.unlike(payload.payload.id);
    })
  );

  constructor(
    private actions$: Actions,
    private userPostService: UserPostService,
    private store$: Store<AppState>
  ) {}
}
