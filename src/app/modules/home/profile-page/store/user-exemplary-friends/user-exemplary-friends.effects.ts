import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, take, exhaustMap, filter, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as UserExemplaryFriendsActions from './user-exemplary-friends.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import ExemplaryFriend from '../../models/exemplary-friend.model';

@Injectable()
export class UserExemplaryFriendsEffects {
  @Effect()
  profilePageGetExemplaryFriends = this.actions$.pipe(
    ofType(UserExemplaryFriendsActions.GET_EXEMPLARY_FRIENDS),
    withLatestFrom(this.store$.select(state => state.profilePageUserExemplaryFriends.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded
    }),
    mergeMap(() => {
      return this.http.get('/api/friend/getExemplaryByUserId',
        {observe: 'response'})
        .pipe(
          map(res => {
            //console.log(res.body)
            let exemplaryFriends : ExemplaryFriend[] = [];
            Array(res.body).map((exemplaryFriend : any) => {
              const newExemplaryFriend : ExemplaryFriend = new ExemplaryFriend(exemplaryFriend[0].id,
                exemplaryFriend[0].avatar);
              exemplaryFriends.push(newExemplaryFriend);
            });
            return ({ type: UserExemplaryFriendsActions.SET_EXEMPLARY_FRIENDS, payload: exemplaryFriends })
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
