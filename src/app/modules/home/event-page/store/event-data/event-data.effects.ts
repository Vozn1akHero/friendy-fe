import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, mergeMap, filter} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import * as EventDataActions from './event-data.actions';
import {EventDataService} from '../../services/event-data.service';


@Injectable()
export class EventDataEffects {
  @Effect()
  getEventData = this.actions$.pipe(
    ofType(EventDataActions.GET_EVENT_DATA),
    switchMap((actionData: EventDataActions.GetEventData) => {
      return this.eventDataService.getEventData(actionData.payload.id)
        .pipe(
          map(res => {
            return ({ type: EventDataActions.SET_EVENT_DATA, payload: res })
          }
      ))
    }));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private eventDataService: EventDataService
  ) {}
}
