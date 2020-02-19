import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, filter, mergeMap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import * as EventDataActions from './event-data.actions';
import {Action, Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {EventDataService} from '../../services/event-data.service';
import {AppState} from '../reducers';
import {of} from 'rxjs';


@Injectable()
export class EventDataEffects {
  @Effect()
  getEvents = this.actions$.pipe(
    ofType(EventDataActions.GET),
    map((action: EventDataActions.GetEventData)=> action.payload.eventId),
    mergeMap((id) =>
        of(id).pipe(
          withLatestFrom(
            this.store$.select(e => e.eventSettingsPageBasicData.eventBasicData[id])
          )
        ),
      (id, data) => data
    ),
    filter(([id, data]) => data == null),
    switchMap(([id, data]) => {
      return this.eventDataService.getById(id)
        .pipe(
          map(res => {
            return ({ type: EventDataActions.SET, payload: res })
          })
        )
    })
  );

  @Effect() updateAvatar = this.actions$.pipe(
    ofType(EventDataActions.UPDATE_AVATAR),
    switchMap((action: EventDataActions.UpdateAvatar) => {
      return this.eventDataService.changeAvatarById(action.payload.eventId, action.payload.image).pipe(
        map((res:any) => {
          return ({
            type: EventDataActions.SET_UPDATED_AVATAR,
            payload: { eventId: action.payload.eventId, src: `http://localhost:5000/${res.body.avatar}` }
          })
        })
      )
    })
  );

  @Effect() updateBackground = this.actions$.pipe(
    ofType(EventDataActions.UPDATE_BACKGROUND),
    switchMap((action: EventDataActions.UpdateBackground) => {
      return this.eventDataService.changeBackgroundById(action.payload.eventId, action.payload.image).pipe(
        map((res:any) => {
          return ({
            type: EventDataActions.SET_UPDATED_BACKGROUND,
            payload: { eventId: action.payload.eventId, src: `http://localhost:5000/${res.body.background}` }
          })
        })
      )
    })
  );

  @Effect() updateData = this.actions$.pipe(
    ofType(EventDataActions.UPDATE_DATA),
    switchMap((action: EventDataActions.UpdateData) => {
      return this.eventDataService.update(action.payload).pipe(
        map((res:any) => {
          return ({
            type: EventDataActions.SET_UPDATED_DATA,
            payload: { eventId: action.payload.id, src: res }
          })
        })
      )
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private eventDataService : EventDataService,
    private router: Router,
    private store$: Store<AppState>
  ) {}
}
