import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, take, exhaustMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as UserExemplaryFriendsActions from './user-exemplary-friends.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

@Injectable()
export class UserExemplaryFriendsEffects {
  @Effect()
  profilePageGetExemplaryFriends = this.actions$.pipe(
    ofType(UserExemplaryFriendsActions.GET_EXEMPLARY_FRIENDS_START),
    exhaustMap((getExemplaryFriendsStart: UserExemplaryFriendsActions.GetExemplaryFriendsStart) => {
      return this.http.get('/api/friend/getExemplaryByUserId',
        {observe: 'response'})
        .pipe(
          map(res => {
            return ({ type: UserExemplaryFriendsActions.GET_EXAMPLE_FRIENDS, payload: res.body })
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
