import { FriendRequestService } from "./../../services/friend-request.service";
import { AppState } from "./../reducers";
import { filter, mergeMap, map, withLatestFrom } from "rxjs/operators";
import { ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as ReceivedFriendRequestActions from "./received-friend-request.actions";

@Injectable()
export class ReceivedFriendRequestEffects {
  @Effect() getRange = this.actions$.pipe(
    ofType<ReceivedFriendRequestActions.Get>(ReceivedFriendRequestActions.GET),
    withLatestFrom(this.store$.select(e => e.receivedFriendRequest.loaded)),
    filter(([action, loaded]) => !loaded),
    mergeMap(([{ payload }]) => {
      return this.friendRequestService
        .getReceivedFriendRequests(payload.page, payload.length)
        .pipe(
          map(value => {
            return new ReceivedFriendRequestActions.Set(value);
          })
        );
    })
  );

  constructor(
    private store$: Store<AppState>,
    private friendRequestService: FriendRequestService,
    private actions$: Actions
  ) {}
}
