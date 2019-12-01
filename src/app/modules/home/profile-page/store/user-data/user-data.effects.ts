import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, take, concatMap, exhaustMap, mergeMap, filter} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as UserDataActions from './user-data.actions';

import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {UserDataService} from '../../services/user-data.service';

@Injectable()
export class MainUserDataEffects {
  @Effect()
  getUser = this.actions$.pipe(
    ofType(UserDataActions.GET_USER_DATA),
    withLatestFrom(this.store.select(e=>e.profilePageUserData.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded
    }),
    mergeMap(([{payload}] : any) => {
      return this.userDataService.getData(payload.id)
        .pipe(
          map(value => {
            return ({ type: UserDataActions.SET_USER_DATA, payload: value })
          })
        )
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private userDataService : UserDataService,
    private store: Store<fromApp.AppState>
  ) {}
}
