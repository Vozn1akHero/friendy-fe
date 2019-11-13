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
import {ExemplaryFriendsService} from '../../services/exemplary-friends.service';

@Injectable()
export class UserExemplaryFriendsEffects {
  @Effect()
  profilePageGetExemplaryFriends = this.actions$.pipe(
    ofType(UserExemplaryFriendsActions.GET_EXEMPLARY_FRIENDS),
    withLatestFrom(this.store$.select(state => state.profilePageUserExemplaryFriends.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded
    }),
    mergeMap(([{payload}] : any) => {
      return this.exemplaryFriendsService.getByUserId(payload.id)
        .pipe(
          map((res: Array<any>) => {
            if(res.length === 0){
              return ({ type: UserExemplaryFriendsActions.SET_EXEMPLARY_FRIENDS, payload: [] })
            }
            let exemplaryFriends : ExemplaryFriend[] = [];
            Array(res).map((exemplaryFriend : any) => {
              const newExemplaryFriend : ExemplaryFriend = new ExemplaryFriend(exemplaryFriend[0].id,
                exemplaryFriend[0].avatarPath);
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
    private exemplaryFriendsService: ExemplaryFriendsService,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
