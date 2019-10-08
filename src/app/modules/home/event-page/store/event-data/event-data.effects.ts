import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, mergeMap, filter} from 'rxjs/operators';
import { of } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import * as EventDataActions from './event-data.actions';
import {AppState} from '../../../../../core/ngrx/store/app.reducer';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import EventShortened from '../../models/event-shortened.model';



@Injectable()
export class EventDataEffects {
  @Effect()
  getEventData = this.actions$.pipe(
    ofType(EventDataActions.GET_EVENT_DATA),
    switchMap((actionData: EventDataActions.GetEventData) => {
      return this.http.get(`/api/event/${actionData.payload.id}`,
        {observe: 'response'})
        .pipe(
          map(res => {
            const eventData : any = res.body;

            let event : EventShortened = new EventShortened(eventData.id,
              eventData.title,
              eventData.street,
              eventData.streetNumber,
              eventData.city,
              eventData.avatar,
              eventData.participantsAmount,
              eventData.date);

            return ({ type: EventDataActions.SET_EVENT_DATA, payload: event })
          }
      ))
    }));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
