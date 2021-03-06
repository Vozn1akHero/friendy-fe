import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as UserListActions from "./user-list.actions";
import { map, switchMap } from "rxjs/operators";
import { FriendsSearchService } from "../../services/friends-search.service";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";

@Injectable()
export class UserListEffects {
  @Effect() getInitial = this.actions$.pipe(
    ofType(UserListActions.GET_INITIAL_LIST),
    switchMap((action: UserListActions.GetInitialList) => {
      return this.friendsSearchService
        .getInitialUserList(action.payload.page)
        .pipe(
          map(res => {
            return new UserListActions.SetInitialList(res);
          })
        );
    })
  );
  @Effect() findByKeyword = this.actions$.pipe(
    ofType<UserListActions.FindByKeyword>(UserListActions.FIND_BY_KEYWORD),
    switchMap(({ payload }) => {
      return this.friendsSearchService
        .getByKeyword(payload.keyword, 1, 20)
        .pipe(
          map(res => {
            return new UserListActions.SetInitialList(res);
          })
        );
    })
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private friendsSearchService: FriendsSearchService
  ) {}
}
