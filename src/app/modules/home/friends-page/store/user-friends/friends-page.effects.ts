import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as UserFriendsActions from './friends-page.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

@Injectable()
export class UserFriendsEffects {
  @Effect()
  getFriends = this.actions$.pipe(
    ofType(UserFriendsActions.GET_FRIENDS_START),
    switchMap((getFriendsStart: UserFriendsActions.GetFriendsStart) => {
      return this.http.get(`/api/friend/getExampleFriends/?firstIndex=${getFriendsStart.payload.startIndex}&lastIndex=${getFriendsStart.payload.lastIndex}`,
        {observe: 'response'})
        .pipe(
          map(res => {
            return ({type: UserFriendsActions.GET_FRIENDS, payload: res.body})
          })
        )
    })
  );

  @Effect()
  filterFriends = this.actions$.pipe(
    ofType(UserFriendsActions.FILTER_FRIENDS_START),
    switchMap((filterFriendsStart: UserFriendsActions.FilterFriendsStart) => {
      return this.http.get(`/api/friend/filterFriends/?keyword=${filterFriendsStart.payload.keyword}`,
        {observe: 'response'})
        .pipe(
          map(res => {
            return ({type: UserFriendsActions.FILTER_FRIENDS, payload: res.body})
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

