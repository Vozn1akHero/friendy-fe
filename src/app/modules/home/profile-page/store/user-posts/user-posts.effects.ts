import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, concatMap, exhaustMap, filter, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as UserPostsActions from './user-posts.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

@Injectable()
export class UserPostsEffects {
  @Effect()
  profilePageAddPost = this.actions$.pipe(
    ofType(UserPostsActions.ADD_POST),
    switchMap((addPostStart: UserPostsActions.AddPost) => {
      return this.http.post('/api/post/createUserPost',
        addPostStart.payload,
        {observe: 'response'})
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
    mergeMap(() => {
      return this.http.get(`/api/post/getLoggedInUserPosts`,
        {observe: 'response'})
        .pipe(
          map(res => {
            return ({ type: UserPostsActions.SET_USER_POSTS,
              payload: res.body })
          })
        )
    })
  );

  @Effect()
  profilePageRemovePost = this.actions$.pipe(
    ofType(UserPostsActions.REMOVE_POST),
    switchMap((payload: UserPostsActions.RemovePost) => {
      return this.http.delete(`/api/post/removeUserPostById/${payload.payload.id}`,
        {observe: 'response'})
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
    exhaustMap((payload: UserPostsActions.LikePostStart) => {
      return this.http.put(`/api/post/likeUserPostById/${payload.payload.id}`,
        {observe: 'response'})
        .pipe(
          map(res => {
            return ({ type: UserPostsActions.LIKE_POST, payload: res })
          })
        )
    })
  );

  @Effect()
  profilePageUnLikePost = this.actions$.pipe(
    ofType(UserPostsActions.UNLIKE_POST_START),
    exhaustMap((payload: UserPostsActions.UnlikePostStart) => {
      return this.http.put(`/api/post/unlikeUserPostById/${payload.payload.id}`,
        {observe: 'response'})
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
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
