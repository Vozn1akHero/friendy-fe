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
        .getSent(payload.page, payload.length)
        .pipe(
          map(value => {
            return new SentFriendRequestActions.Set(value);
          })
        );
    })
  );

  @Effect() findByKeyword = this.actions$.pipe(
    ofType<SentFriendRequestActions.FindByKeyword>(
      SentFriendRequestActions.FIND_BY_KEYWORD
    ),
    withLatestFrom(this.store$.select(e => e.sentFriendRequest.foundEntries)),
    filter(([action, foundEntries]) => {
      return foundEntries[action.payload.keyword] == null;
    }),
    mergeMap(([{ payload }]) => {
      return this.friendRequestService
        .filterSentByKeyword(payload.keyword, 1, 20)
        .pipe(
          map(value => {
            return new SentFriendRequestActions.SetFound({
              keyword: payload.keyword,
              entries: value
            });
          })
        );
    })
  );

  @Effect() fillFoundByKeyword = this.actions$.pipe(
    ofType<SentFriendRequestActions.FillFoundByKeyword>(
      SentFriendRequestActions.FILL_FOUND_BY_KEYWORD
    ),
    mergeMap(({ payload }) => {
      return this.friendRequestService
        .filterSentByKeyword(payload.keyword, payload.page, payload.length)
        .pipe(
          map(value => {
            return new SentFriendRequestActions.FillFoundByKeywordInState({
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
