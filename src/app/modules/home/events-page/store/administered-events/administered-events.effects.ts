import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, filter, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import * as AdministeredEventsActions from './administered-events.actions';
import {AppState} from '../../../../../core/ngrx/store/app.reducer';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import Event from '../../models/event.model';
import {EventsService} from '../../services/events.service';


@Injectable()
export class AdministeredEventsEffects {
  @Effect()
  getAdministeredEvents = this.actions$.pipe(
    ofType(AdministeredEventsActions.GET_ADMINISTERED_EVENTS),
    withLatestFrom(this.store.select(e=>e.eventsPageAdministeredEvents.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded
    }),
    mergeMap(() => {
      return this.eventsService.getAdministeredEvents()
        .pipe(
          map(res => {

            return ({ type: AdministeredEventsActions.SET_ADMINISTERED_EVENTS,
              payload: res })
          })
        )
    })
  );

  @Effect()
  filterAdministeredEvents = this.actions$.pipe(
    ofType(AdministeredEventsActions.FILTER_ADMINISTERED_EVENTS),
    switchMap((actionData: AdministeredEventsActions.FilterAdministeredEvents) => {
      return this.eventsService.filterAdministeredEvents(actionData.payload.keyword)
        .pipe(
          map(res => {
            return ({ type: AdministeredEventsActions.FILTER_ADMINISTERED_EVENTS,
              payload: res })
          })
        )
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private eventsService : EventsService,
    private store: Store<fromApp.AppState>
  ) {}
}
