import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as UserActions from './user.actions';
import User from '../../../data/schema/user';
import {AppState} from '../store/app.reducer';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class UserEffects {
  @Effect()
  getUser = this.actions$.pipe(
    ofType(UserActions.GET_USER_START),
    withLatestFrom(this.store$),
    switchMap(() => {
      return this.http.get('/api/user/getUser', {observe: 'response'})
        .pipe(
          map(res => {
            return ({ type: UserActions.GET_USER, payload: res.body })
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
