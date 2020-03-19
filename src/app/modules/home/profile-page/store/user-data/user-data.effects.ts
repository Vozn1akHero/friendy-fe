import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { map, take, mergeMap, filter, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import * as UserDataActions from "./user-data.actions";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../../../core/ngrx/store/app.reducer";
import { UserDataService } from "../../services/user-data.service";
import User from "../../models/user.model";
import { AppState } from "../reducers";

@Injectable()
export class UserDataEffects {
  handleUserNotFoundError = () => {
    this.router.navigate(["/404"]);
  };

  @Effect()
  getUser = this.actions$.pipe(
    ofType(UserDataActions.GET_USER_DATA),
    filter((getUserData: UserDataActions.GetUserData) => {
      return this.checkIfUserDataExistsInState(getUserData.payload.id);
    }),
    mergeMap((getUserData: UserDataActions.GetUserData) => {
      return this.userDataService.getData(getUserData.payload.id).pipe(
        map(value => {
          const user: { [id: number]: User } = { [value.id]: value };
          return { type: UserDataActions.SET_USER_DATA, payload: user };
        })
      );
    })
  );

  private checkIfUserDataExistsInState = (id: number): boolean => {
    let result: boolean;
    this.store
      .select(e => e.profilePageUserData.profiles)
      .pipe(take(1))
      .subscribe(value => {
        result = value[id] == null;
      });
    return result;
  };

  constructor(
    private actions$: Actions,
    private userDataService: UserDataService,
    private router: Router,
    private store: Store<AppState>
  ) {}
}
