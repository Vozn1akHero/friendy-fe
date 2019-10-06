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
import ExemplaryMessage from '../../models/exemplary-message.model';

@Injectable()
export class ExemplaryMessagesEffects {
  @Effect() getExemplaryMessages = this.actions$.pipe(
    ofType(ExemplaryMessagesActions.GET_EXEMPLARY_MESSAGES),
    withLatestFrom(this.store$.select(state => state.messagesPageExemplaryMessages.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded;
    }),
    mergeMap(([{payload}]) => {
      return this.exemplaryMessagesService.getExemplaryMessages()
        .pipe(
          map(response => {
            let messages : ExemplaryMessage[] = [];
            Array(response.body).map((exemplaryMessage : any) => {
              let newExemplaryMessage = new ExemplaryMessage(exemplaryMessage[0].chatUrlPart,
                exemplaryMessage[0].content,
                exemplaryMessage[0].hasImage,
                exemplaryMessage[0].userId,
                exemplaryMessage[0].userAvatar,
                exemplaryMessage[0].date);
              //console.log(newExemplaryMessage);
              messages.push(newExemplaryMessage);
            });

            return new ExemplaryMessagesActions.SetExemplaryMessages(messages);
          })
        )
      }
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private exemplaryMessagesService: ExemplaryMessagesService,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
