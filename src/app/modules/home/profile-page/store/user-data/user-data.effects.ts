import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as UserDataActions from './user-data.actions';

import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

@Injectable()
export class UserEffects {
  @Effect()
  getUser = this.actions$.pipe(
    ofType(UserDataActions.GET_USER_DATA_START),
    withLatestFrom(this.store$.select(e=>e.profilePageUserData.user)),
    switchMap(() => {
      return this.http.get('/api/user/getUser', {observe: 'response'})
        .pipe(
          map(res => {
            return ({ type: UserDataActions.GET_USER_DATA, payload: res.body })
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
