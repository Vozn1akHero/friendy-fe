import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import * as AdministeredEventsActions from './administered-events.actions';
import {AppState} from '../../../../../core/ngrx/store/app.reducer';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';


@Injectable()
export class AdministeredEventsEffects {
  @Effect()
  getAdministeredEvents = this.actions$.pipe(
    ofType(AdministeredEventsActions.GET_ADMINISTERED_EVENTS_START),
    switchMap(() => {
      return this.http.get('/api/event/getLoggedInUserAdministeredEvents', {observe: 'response'})
        .pipe(
          map(res => {
            return ({ type: AdministeredEventsActions.GET_ADMINISTERED_EVENTS,
              payload: res.body })
          })
        )
    })
  );

  @Effect()
  filterAdministeredEvents = this.actions$.pipe(
    ofType(AdministeredEventsActions.FILTER_ADMINISTERED_EVENTS_START),
    switchMap((actionData: AdministeredEventsActions.FilterAdministeredEventsStart) => {
      return this.http.get(`/api/event/filterAdministeredEvents?keyword=${actionData.payload.keyword}`, {observe: 'response'})
        .pipe(
          map(res => {
            return ({ type: AdministeredEventsActions.FILTER_ADMINISTERED_EVENTS,
              payload: res.body })
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