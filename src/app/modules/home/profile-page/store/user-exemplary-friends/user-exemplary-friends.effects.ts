import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { switchMap, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import * as UserExemplaryFriendsActions from "./user-exemplary-friends.actions";
import ExemplaryFriend from "../../models/exemplary-friend.model";
import { ExemplaryFriendsService } from "../../services/exemplary-friends.service";

@Injectable()
export class UserExemplaryFriendsEffects {
  @Effect()
  profilePageGetExemplaryFriends = this.actions$.pipe(
    ofType(UserExemplaryFriendsActions.GET_EXEMPLARY_FRIENDS),
    switchMap((action: UserExemplaryFriendsActions.GetExemplaryFriends) => {
      return this.exemplaryFriendsService.getByUserId(action.payload.id).pipe(
        map((res: any[]) => {
          return {
            type: UserExemplaryFriendsActions.SET_EXEMPLARY_FRIENDS,
            payload: {
              [action.payload.id]: [
                ...res.map(
                  (value: any) =>
                    new ExemplaryFriend(
                      value.id,
                      value.name,
                      value.surname,
                      value.avatarPath
                    )
                )
              ]
            }
          };
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private exemplaryFriendsService: ExemplaryFriendsService
  ) {}
}
