import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, map, withLatestFrom, filter} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as UserAvatarActions from './user-avatar.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import UserAvatar from '../../models/user-avatar.model';
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
    switchMap(() => {
        return this.userAvatarService.getAvatar()
          .pipe(
            map(res => {
              const avatarBytes: string = res.body.toString();
              const newAvatar : UserAvatar = new UserAvatar(avatarBytes);
              return new UserAvatarActions.SetUserAvatar(newAvatar);
            })
        )
      }
    )
  );

  @Effect()
  updateUserAvatar = this.actions$.pipe(
    ofType(UserAvatarActions.UPDATE_USER_AVATAR),
    switchMap((updateAvatarStart: UserAvatarActions.UpdateUserAvatar) => {
      return this.userAvatarService.updateAvatar(updateAvatarStart.payload.avatarBytes)
        .pipe(
          map(() => {
            return ({ type: UserAvatarActions.SET_USER_AVATAR,
              payload: updateAvatarStart.payload.avatarBytes })
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
