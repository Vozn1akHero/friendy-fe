import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { map, mergeMap, filter, withLatestFrom } from "rxjs/operators";
import * as UserExemplaryFriendsActions from "./user-exemplary-friends.actions";
import UserFriend from "../../models/user-friend.model";
import { UserFriendsService } from "../../services/user-friends.service";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";

@Injectable()
export class UserExemplaryFriendsEffects {
  @Effect()
  profilePageGetExemplaryFriends = this.actions$.pipe(
    ofType<UserExemplaryFriendsActions.GetExemplaryFriends>(
      UserExemplaryFriendsActions.GET_EXEMPLARY_FRIENDS
    ),
    withLatestFrom(
      this.store$.select(e => e.profilePageUserExemplaryFriends.loaded)
    ),
    filter(([action, loaded]) => !loaded[action.payload.id]),
    mergeMap(([{ payload }]) => {
      return this.userFriendsService.getByUserId(payload.id).pipe(
        map((res: any[]) => {
          return new UserExemplaryFriendsActions.SetExemplaryFriends({
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

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private userFriendsService: UserFriendsService
  ) {}
}
