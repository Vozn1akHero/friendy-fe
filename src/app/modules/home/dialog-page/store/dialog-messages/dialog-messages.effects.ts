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
import MessageInChatModel from '../../models/message-in-chat.model';


@Injectable()
export class DialogMessagesEffects {
  @Effect() getMessagesInDialog = this.actions$.pipe(
    ofType(DialogActions.GET_DIALOG),
    withLatestFrom(this.store$.select(state => state.messagesPageDialog.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded;
    }),
    mergeMap(([{payload}]: any) => {
      return this.dialogService.getMessagesInDialog(payload.to, payload.page)
        .pipe(
          map(response => {
            return new DialogActions.SetDialog(response);
          })
        )
      }
    )
  );

  @Effect() addMessageInDialog = this.actions$.pipe(
    ofType(DialogActions.ADD_NEW_MESSAGE),
    mergeMap((payload: any) => {
        return this.dialogService.addNewMessage(payload.payload.chatId,
          payload.payload.receiverId,
          payload.payload.newMessage)
          .pipe(
            map((response : MessageInChatModel) => {
              return new DialogActions.SetAddedMessage(response);
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
