import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as ProfilePageActions from './profile-page.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../core/ngrx/store/app.reducer';

@Injectable()
export class ProfilePageEffects {
  @Effect()
  profilePageAddPost = this.actions$.pipe(
    ofType(ProfilePageActions.ADD_POST_START),
    switchMap((addPostStart: ProfilePageActions.AddPostStart) => {
      return this.http.post('/api/entry/createUserEntry',
        addPostStart.payload,
        {observe: 'response'})
        .pipe(
          map(res => {
            return ({ type: ProfilePageActions.ADD_POST, payload: res.body })
          })
        )
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
