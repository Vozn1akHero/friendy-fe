import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, withLatestFrom, take, filter, mergeMap, exhaustMap, mapTo, concatMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as DialogActions from './dialog-messages.actions';
import {Action, Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {DialogService} from '../../services/dialog.service';
import MessageInChat from '../../models/message-in-chat.model';


@Injectable()
export class DialogMessagesEffects {
  @Effect() getMessagesInDialog = this.actions$.pipe(
    ofType(DialogActions.GET_DIALOG),
    withLatestFrom(this.store$.select(state => state.messagesPageExemplaryMessages.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded;
    }),
    mergeMap((payload) => {
      console.log(payload);

      return this.dialogService.getMessagesInDialog('dwgdfe1tjftj')
        .pipe(
          map(response => {
            var messages : any[] = Array(response.body);
            var messageList: MessageInChat[] = [];
            messages.map(message => {
              const newMessage = new MessageInChat();
              messageList.push(newMessage);
            });
            return new DialogActions.SetDialog(messageList);
          })
        )
      }
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private dialogService: DialogService,
    private router: Router,
    private store$: Store<fromApp.AppState>
  ) {}
}
