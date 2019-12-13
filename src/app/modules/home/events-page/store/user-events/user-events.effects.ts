import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, filter, mergeMap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import * as UserEventsActions from './user-events.actions';
import {Action, Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import Event from '../../models/event.model';
import {UserEventsService} from '../../services/user-events.service';
import * as AdministeredEventsActions from '../administered-events/administered-events.actions';
import {of} from 'rxjs';
import {AppState} from '../../../../../core/ngrx/store/app.reducer';



@Injectable()
export class UserEventsEffects {
  @Effect()
  getEvents = this.actions$.pipe(
    ofType(UserEventsActions.GET_EVENTS),
    withLatestFrom(this.store$.select(e => e.eventsPageUserEvents.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded
    }),
    mergeMap(() => {
      return this.eventsService.getLoggedInUserEvents()
          .pipe(
            map(res => {
              return ({ type: UserEventsActions.SET_EVENTS, payload: res })
            })
          )
    })
  );

  @Effect()
  filterEvents = this.actions$.pipe(
    ofType(UserEventsActions.FILTER_EVENTS),
    switchMap((actionData: UserEventsActions.FilterEvents) => {
      return this.eventsService.filterParticipatingByKeyword(actionData.payload.keyword)
        .pipe(
          map(res => {
            return ({ type: UserEventsActions.SET_FILTERED_EVENTS,
              payload: res })
          })
        )
    })
  );

  @Effect()
  setDefault = this.actions$.pipe(
    ofType(UserEventsActions.SET_DEFAULT_EVENTS),
    withLatestFrom(this.store$.select(e => e.eventsPageUserEvents.events)),
    map((([action, events]: [UserEventsActions.SetDefaultEvents, Event[]]) => {
      console.log(events)
      return of().pipe(map(()=>{
        return ({ type: UserEventsActions.SET_EVENTS,
          payload: events })
      }))
    }))
  );


  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private eventsService : UserEventsService,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
