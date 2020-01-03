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


@Injectable()
export class ExemplaryMessagesEffects {
  @Effect() getExemplaryMessages = this.actions$.pipe(
    ofType(ExemplaryMessagesActions.GET_EXEMPLARY_MESSAGES),
    withLatestFrom(this.store$.select(state => state.messagesPageExemplaryMessages.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded;
    }),
    mergeMap(([{payload}] : any) => {
      return this.exemplaryMessagesService.getExemplaryMessages(payload.startIndex, payload.length)
        .pipe(
          map(messages => {
            return new ExemplaryMessagesActions.SetExemplaryMessages(messages);
          })
        )
      }
    )
  );

  constructor(
    private actions$: Actions,
    private exemplaryMessagesService: ExemplaryMessagesService,
    private store$: Store<fromApp.AppState>
  ) {}
}
