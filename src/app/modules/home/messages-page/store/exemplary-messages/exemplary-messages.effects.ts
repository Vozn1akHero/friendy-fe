import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, take, filter, mergeMap, exhaustMap, mapTo, concatMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as ExemplaryMessagesActions from './exemplary-messages.actions';
import {Action, Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

import {ExemplaryMessagesService} from '../../services/exemplary-messages.service';
import {AppState} from '../../../../../core/ngrx/store/app.reducer';

@Injectable()
export class ExemplaryMessagesEffects {
  @Effect() getExemplaryMessages = this.actions$.pipe(
    ofType(ExemplaryMessagesActions.GET_EXEMPLARY_MESSAGES),
    withLatestFrom(this.store$.select(state => state.messagesPageExemplaryMessages.exemplaryMessages)),
    filter((([methodEntity, exemplaryMessages]) => {
      return exemplaryMessages.length > 0;
    }),
    map((value: ExemplaryMessagesActions.GetExemplaryMessages) => {
      return this.exemplaryMessagesService.getExemplaryMessages()
        .pipe(
          map(response => {
            console.log(response);
          })
        )
      }
    )
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private exemplaryMessagesService: ExemplaryMessagesService,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
