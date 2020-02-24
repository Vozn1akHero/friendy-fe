import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, take, exhaustMap, filter, mergeMap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as UserExemplaryFriendsActions from './user-exemplary-friends.actions';
import ExemplaryFriend from '../../models/exemplary-friend.model';
import {ExemplaryFriendsService} from '../../services/exemplary-friends.service';

@Injectable()
export class UserExemplaryFriendsEffects {
  @Effect()
  profilePageGetExemplaryFriends = this.actions$.pipe(
    ofType(UserExemplaryFriendsActions.GET_EXEMPLARY_FRIENDS),
    switchMap((payload: UserExemplaryFriendsActions.GetExemplaryFriends) => {
      return this.exemplaryFriendsService.getByUserId(payload.payload.id, 1)
        .pipe(
          map((res: any[]) => {
            let exemplaryFriends : ExemplaryFriend[] = [];
            res.map((exemplaryFriend : any) => {
              const newExemplaryFriend : ExemplaryFriend = new ExemplaryFriend(exemplaryFriend.id,
                exemplaryFriend.avatarPath);
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
    private exemplaryFriendsService: ExemplaryFriendsService
  ) {}
}
