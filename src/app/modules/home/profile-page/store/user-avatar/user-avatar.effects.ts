import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, map, withLatestFrom, filter, mergeMap} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import * as UserAvatarActions from './user-avatar.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {UserAvatarService} from '../../services/user-avatar.service';

@Injectable()
export class UserAvatarEffects {
  @Effect()
  getUserAvatar = this.actions$.pipe(
    ofType(UserAvatarActions.GET_USER_AVATAR),
    withLatestFrom(this.store$.select(state => state.profilePageUserAvatar.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded
    }),
    mergeMap(([{payload}] : any) => {
      return this.userAvatarService.getAvatarByUserId(payload.userId)
        .pipe(
          map(res => {
          const userAvatarUrl = "http://localhost:5000/" + res;
          return ({ type: UserAvatarActions.SET_USER_AVATAR, payload: { userAvatarUrl: userAvatarUrl } })
        }));
      }
    )
  );

  @Effect()
  updateUserAvatar = this.actions$.pipe(
    ofType(UserAvatarActions.UPDATE_USER_AVATAR),
    switchMap((updateAvatarStart: UserAvatarActions.UpdateUserAvatar) => {
      return this.userAvatarService.updateAvatar(updateAvatarStart.payload)
        .pipe(
          map(res => {
            const userAvatarUrl = "http://localhost:5000/" + res;
            return new UserAvatarActions.SetUserAvatar({userAvatarUrl});
          })
        )
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private userAvatarService: UserAvatarService,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
