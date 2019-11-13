import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, filter, mergeMap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import * as UserEventsActions from './user-events.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import Event from '../../models/event.model';
import {EventsService} from '../../services/events.service';


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
              if((res.body as Array<any>).length === 0){
                return ({ type: UserEventsActions.SET_EVENTS,
                  payload: [] })
              }
              let events : Event[] = [];
              Array(res.body).map(event => {
                events.push(new Event(event[0].id,
                  event[0].title,
                  event[0].street,
                  event[0].streetNumber,
                  event[0].city,
                  event[0].avatarPath,
                  event[0].participantsAmount,
                  event[0].date))
              });
              return ({ type: UserEventsActions.SET_EVENTS, payload: events })
            })
          )
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private eventsService : EventsService,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
