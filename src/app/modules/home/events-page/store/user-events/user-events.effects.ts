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
import Event from '../../models/event.model';


@Injectable()
export class UserEventsEffects {
  @Effect()
  getEvents = this.actions$.pipe(
    ofType(UserEventsActions.GET_EVENTS),
    withLatestFrom(this.store$.select(e => e.eventsPageUserEvents.events)),
    switchMap(() => {
      return this.http.get('/api/event/user/loggedin',
        {observe: 'response'})
          .pipe(
            map(res => {
              let events : Event[] = [];
              Array(res.body).map(event => {
                events.push(new Event(event[0].id,
                  event[0].title,
                  event[0].street,
                  event[0].streetNumber,
                  event[0].city,
                  event[0].avatar,
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
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
