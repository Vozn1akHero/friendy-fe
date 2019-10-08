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
import Event from '../../models/event.model';


@Injectable()
export class AdministeredEventsEffects {
  @Effect()
  getAdministeredEvents = this.actions$.pipe(
    ofType(AdministeredEventsActions.GET_ADMINISTERED_EVENTS),
    switchMap(() => {
      return this.http.get('/api/event/user/loggedin/administered', {observe: 'response'})
        .pipe(
          map(res => {
            let administeredEvents : Event[] = [];
            Array(res.body).map(event => {
              administeredEvents.push(new Event(event[0].id,
                event[0].title,
                event[0].street,
                event[0].streetNumber,
                event[0].city,
                event[0].avatar,
                event[0].participantsAmount,
                event[0].date))
            });

            return ({ type: AdministeredEventsActions.SET_ADMINISTERED_EVENTS,
              payload: administeredEvents })
          })
        )
    })
  );

  @Effect()
  filterAdministeredEvents = this.actions$.pipe(
    ofType(AdministeredEventsActions.FILTER_ADMINISTERED_EVENTS),
    switchMap((actionData: AdministeredEventsActions.FilterAdministeredEvents) => {
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
