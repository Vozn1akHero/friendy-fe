import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {
  filter,
  map,
  mergeMap,
  withLatestFrom,
  switchMap
} from "rxjs/operators";
import ExemplaryFriend from "../../models/user-friend.model";
import { UserFriendsService } from "../../services/user-friends.service";
import { AppState } from "../reducers";
import * as UserFriendActions from "./user-friends.actions";
import UserFriend from "../../models/user-friend.model";

@Injectable()
export class UserFriendsEffects {
  @Effect()
  profilePageGetUserFriends = this.actions$.pipe(
    ofType<UserFriendActions.GetInitial>(UserFriendActions.GET_INITIAL),
    withLatestFrom(this.store$.select(e => e.profilePageUserFriends.loaded)),
    filter(([action, loaded]) => !loaded[action.payload.id]),
    mergeMap(([{ payload }]) => {
      return this.userFriendsService.getByUserId(payload.id, 1, 20).pipe(
        map((res: any[]) => {
          return new UserFriendActions.SetInitial({
            id: payload.id,
            entries: [
              ...res.map(
                (value: any) =>
                  new UserFriend(
                    value.id,
                    value.name,
                    value.surname,
                    value.avatarPath
                  )
              )
            ]
          });
        })
      );
    })
  );

  @Effect()
  profilePageStartFilling = this.actions$.pipe(
    ofType<UserFriendActions.StartFilling>(UserFriendActions.START_FILLING),
    switchMap(({ payload }) => {
      return this.userFriendsService
        .getByUserId(payload.id, payload.page, payload.length)
        .pipe(
          map((res: any[]) => {
            return new UserFriendActions.Fill({
              id: payload.id,
              page: payload.page,
              entries: [
                ...res.map(
                  (value: any) =>
                    new UserFriend(
                      value.id,
                      value.name,
                      value.surname,
                      value.avatarPath
                    )
                )
              ]
            });
          })
        );
    })
  );

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private userFriendsService: UserFriendsService
  ) {}
}
