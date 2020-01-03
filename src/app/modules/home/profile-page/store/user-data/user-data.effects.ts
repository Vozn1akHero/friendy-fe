import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, take, mergeMap, filter} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as UserDataActions from './user-data.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {UserDataService} from '../../services/user-data.service';
import User from '../../models/user.model';

@Injectable()
export class UserDataEffects {
  @Effect()
  getUser = this.actions$.pipe(
    ofType(UserDataActions.GET_USER_DATA),
    filter((getUserData: UserDataActions.GetUserData) => {
      return this.checkIfUserDataExistsInState(getUserData.payload.id)
    }),
    mergeMap((getUserData: UserDataActions.GetUserData) => {
      return this.userDataService.getData(getUserData.payload.id)
        .pipe(
          map(value => {
            const user:{[id : number]: User} = { [value.id]: value };
            return ({ type: UserDataActions.SET_USER_DATA, payload: user })
          })
        )
    })
  );

  private checkIfUserDataExistsInState = (id):boolean => {
    let result : boolean;
    this.store.select(e => e.profilePageUserData.profiles)
      .pipe(take(1)).subscribe(value => {
      result = value[id] == null;
    });
    return result;
  };

  constructor(
    private actions$: Actions,
    private userDataService : UserDataService,
    private store: Store<fromApp.AppState>
  ) {}
}

