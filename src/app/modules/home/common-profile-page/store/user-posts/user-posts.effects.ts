import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import * as CommonProfilePostsActions from './user-posts.actions';
import User from '../../../profile-page/models/user.model';
import {AppState} from '../../../../../core/ngrx/store/app.reducer';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

const handleErrors = (error : HttpErrorResponse) => {

};

@Injectable()
export class UserDataEffects {
  @Effect()
  getUser = this.actions$.pipe(
    ofType(CommonProfilePostsActions.GET_POSTS_START),
    switchMap((getPostsStart: CommonProfilePostsActions.GetPostsStart) => {
      return this.http.get(`/api/post/getById/${getPostsStart.payload.id}`, {observe: 'response'})
        .pipe(
          map(res => {
            console.log(res.body)
            return ({ type: CommonProfilePostsActions.GET_POSTS, payload: res.body })
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
