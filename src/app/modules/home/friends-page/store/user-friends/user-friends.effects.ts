import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
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
    switchMap((getFriendsStart: UserFriendsActions.GetFriends) => {
      return this.friendsService.getFriendsRange(getFriendsStart.payload.firstIndex,
        getFriendsStart.payload.lastIndex)
        .pipe(
          map(res => {
            let friends : Friend[] = [];
            Array(res.body).map(friend => {
              friends.push(new Friend(friend[0].id,
                friend[0].name,
                friend[0].surname,
                friend[0].onlineStatus,
                friend[0].dialogLink,
                friend[0].avatar));
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
    private store$: Store<fromApp.AppState>
  ) {}
}

