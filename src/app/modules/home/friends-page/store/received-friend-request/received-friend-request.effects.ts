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
        .getReceived(payload.page, payload.length)
        .pipe(
          map(value => {
            return new ReceivedFriendRequestActions.Set(value);
          })
        );
    })
  );

  @Effect() findByKeyword = this.actions$.pipe(
    ofType<ReceivedFriendRequestActions.FindByKeyword>(
      ReceivedFriendRequestActions.FIND_BY_KEYWORD
    ),
    withLatestFrom(
      this.store$.select(e => e.receivedFriendRequest.foundEntries)
    ),
    filter(([action, foundEntries]) => {
      return foundEntries[action.payload.keyword] == null;
    }),
    mergeMap(([{ payload }]) => {
      return this.friendRequestService
        .filterSentByKeyword(payload.keyword, 1, 20)
        .pipe(
          map(value => {
            return new ReceivedFriendRequestActions.SetFound({
              keyword: payload.keyword,
              entries: value
            });
          })
        );
    })
  );

  @Effect() fillFoundByKeyword = this.actions$.pipe(
    ofType<ReceivedFriendRequestActions.FindByKeyword>(
      ReceivedFriendRequestActions.FIND_BY_KEYWORD
    ),
    withLatestFrom(
      this.store$.select(e => e.receivedFriendRequest.foundEntries)
    ),
    filter(([action, foundEntries]) => {
      return foundEntries[action.payload.keyword] == null;
    }),
    mergeMap(([{ payload }]) => {
      return this.friendRequestService
        .filterSentByKeyword(payload.keyword, 1, 20)
        .pipe(
          map(value => {
            return new ReceivedFriendRequestActions.FillFoundByKeywordInState({
              keyword: payload.keyword,
              entries: value
            });
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
