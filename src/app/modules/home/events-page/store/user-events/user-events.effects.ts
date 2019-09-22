import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import * as UserEventsActions from './user-events.actions';
import {AppState} from '../../../../../core/ngrx/store/app.reducer';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';


@Injectable()
export class UserEventsEffects {
  @Effect()
  getUser = this.actions$.pipe(
    ofType(UserEventsActions.GET_EVENTS_START),
    withLatestFrom(this.store$.select(e => e.eventsPageUserEvents.events)),
    switchMap(() => {
      return this.http.get('/api/event/getLoggedInUserEvents', {observe: 'response'})
        .pipe(
          map(res => {
            return ({ type: UserEventsActions.GET_EVENTS, payload: res.body })
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
