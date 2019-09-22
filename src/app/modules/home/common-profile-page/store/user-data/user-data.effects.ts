import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import * as CommonProfilePageActions from './user-data.actions';
import User from '../../../../../data/models/user.model';
import {AppState} from '../../../../../core/ngrx/store/app.reducer';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

const handleErrors = (error : HttpErrorResponse) => {
    if(error.status == 404){
      return of(new CommonProfilePageActions.UserNotFound())
    }
  };

@Injectable()
export class UserDataEffects {
  @Effect()
  getUser = this.actions$.pipe(
    ofType(CommonProfilePageActions.GET_USER_START),
    switchMap((getUserStart: CommonProfilePageActions.GetUserStart) => {
      return this.http.get(`/api/user/getById/${getUserStart.payload.id}`, {observe: 'response'})
        .pipe(
          map(res => {
            console.log(res.body)
            return ({ type: CommonProfilePageActions.GET_USER, payload: res.body })
          }),
          catchError(handleErrors)
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
