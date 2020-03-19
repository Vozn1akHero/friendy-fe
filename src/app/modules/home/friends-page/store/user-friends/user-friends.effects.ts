import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, Effect } from "@ngrx/effects";
import {
  switchMap,
  catchError,
  map,
  tap,
  withLatestFrom,
  filter,
  mergeMap
} from "rxjs/operators";
import { HttpClient, HttpResponse } from "@angular/common/http";

import * as UserFriendsActions from "./user-friends.actions";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../../../core/ngrx/store/app.reducer";
import { FriendsService } from "../../services/friends.service";

@Injectable()
export class UserFriendsEffects {
  /*@Effect()
  getFriends = this.actions$.pipe(
    ofType(UserFriendsActions.GET_FRIENDS),
    withLatestFrom(this.store.select(e=>e.friendsPageUserFriends.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded
    }),
    mergeMap(([{payload}] : any) => {
      return this.friendsService.getFriendsRange(payload.firstIndex,
        payload.length)
        .pipe(
          map(res => {
            return ({type: UserFriendsActions.SET_FRIENDS, payload: res})
          })
        )
    })
  );*/
  @Effect()
  getStartList = this.actions$.pipe(
    ofType(UserFriendsActions.GET_START_FRIEND_LIST),
    switchMap(() => {
      return this.friendsService.getFriends(1, 20).pipe(
        map(res => {
          return {
            type: UserFriendsActions.SET_START_FRIEND_LIST,
            payload: res
          };
        })
      );
    })
  );

  @Effect()
  getFriends = this.actions$.pipe(
    ofType(UserFriendsActions.GET_FRIENDS),
    switchMap((action: UserFriendsActions.GetFriends) => {
      return this.friendsService
        .getFriends(action.payload.page, action.payload.length)
        .pipe(
          map(res => {
            return { type: UserFriendsActions.SET_FRIENDS, payload: res };
          })
        );
    })
  );

  @Effect()
  filterFriends = this.actions$.pipe(
    ofType(UserFriendsActions.FILTER_FRIENDS),
    switchMap((filterFriendsStart: UserFriendsActions.FilterFriends) => {
      return this.friendsService
        .filterFriends(filterFriendsStart.payload.keyword)
        .pipe(
          map(res => {
            return {
              type: UserFriendsActions.SET_FILTERED_FRIENDS,
              payload: res
            };
          })
        );
    })
  );

  @Effect()
  removeFriend = this.actions$.pipe(
    ofType(UserFriendsActions.REMOVE_FRIEND),
    switchMap((filterFriendsStart: UserFriendsActions.RemoveFriend) => {
      return this.friendsService.removeById(filterFriendsStart.payload.id).pipe(
        map((res: any) => {
          if (res.status === 200) {
            return {
              type: UserFriendsActions.REMOVE_FRIEND_FROM_STATE,
              payload: { id: filterFriendsStart.payload.id }
            };
          }
        })
      );
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
