import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, mergeMap, filter} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import * as EventDataActions from './event-data.actions';
import {EventDataService} from '../../services/event-data.service';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {of} from 'rxjs';
import EventShortened from '../../models/event-shortened.model';


@Injectable()
export class EventDataEffects {
  @Effect()
  getEventData = this.actions$.pipe(
    ofType(EventDataActions.GET_EVENT_DATA),
    /*map((action: EventDataActions.GetEventData) => action.payload.id),
    mergeMap((id) =>
        of(id).pipe(
          withLatestFrom(
            this.store.select(e => e.eventPageEventData.events[id])
          )
        ),
      (id, data) => data
    ),
    filter(([id, data]) => data === null),*/
    switchMap((action: EventDataActions.GetEventData) => {
      return this.eventDataService.getEventData(action.payload.id)
        .pipe(
          map(res => {
            return ({ type: EventDataActions.SET_EVENT_DATA, payload: res })
          }
      ))
    }));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>,
    private eventDataService: EventDataService
  ) {}
}
