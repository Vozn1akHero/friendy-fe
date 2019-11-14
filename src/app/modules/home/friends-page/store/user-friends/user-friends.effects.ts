import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, filter, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as UserFriendsActions from './user-friends.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import Friend from '../../models/friend.model';
import {FriendsService} from '../../services/friends.service';

@Injectable()
export class UserFriendsEffects {
  @Effect()
  getFriends = this.actions$.pipe(
    ofType(UserFriendsActions.GET_FRIENDS),
    withLatestFrom(this.store.select(e=>e.friendsPageUserFriends.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded
    }),
    mergeMap(([{payload}] : any) => {
      return this.friendsService.getFriendsRange(payload.firstIndex,
        payload.lastIndex)
        .pipe(
          map(res => {
            if(Object.keys(res.body).length === 0){
              return ({type: UserFriendsActions.SET_FRIENDS, payload: []})
            }
            let friends : Friend[] = [];
            Array(res.body).map(friend => {
              friends.push(new Friend(friend[0].id,
                friend[0].name,
                friend[0].surname,
                friend[0].onlineStatus,
                friend[0].dialogLink,
                friend[0].avatarPath));
            });
            return ({type: UserFriendsActions.SET_FRIENDS, payload: friends})
          })
        )
    })
  );

  @Effect()
  filterFriends = this.actions$.pipe(
    ofType(UserFriendsActions.FILTER_FRIENDS),
    switchMap((filterFriendsStart: UserFriendsActions.FilterFriends) => {
      return this.friendsService.filterFriends(filterFriendsStart.payload.keyword)
        .pipe(
          map(res => {
            return ({type: UserFriendsActions.SET_FILTERED_FRIENDS, payload: res.body})
          })
        )
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private friendsService: FriendsService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
}

