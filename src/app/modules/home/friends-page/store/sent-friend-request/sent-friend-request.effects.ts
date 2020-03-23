import { FriendRequestService } from "../../services/friend-request.service";
import { AppState } from "../reducers";
import { filter, mergeMap, map, withLatestFrom } from "rxjs/operators";
import { ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as SentFriendRequestActions from "./sent-friend-request.actions";

@Injectable()
export class SentFriendRequestEffects {
  @Effect() getRange = this.actions$.pipe(
    ofType<SentFriendRequestActions.Get>(SentFriendRequestActions.GET),
    withLatestFrom(this.store$.select(e => e.sentFriendRequest.loaded)),
    filter(([action, loaded]) => !loaded),
    mergeMap(([{ payload }]) => {
      return this.friendRequestService
        .getSentFriendRequests(payload.page, payload.length)
        .pipe(
          map(value => {
            return new SentFriendRequestActions.Set(value);
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
