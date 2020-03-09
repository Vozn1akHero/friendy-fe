import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, map,mergeMap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as DialogActions from './dialog-messages.actions';
import {DialogService} from '../../services/dialog.service';
import MessageInChatModel from '../../models/message-in-chat.model';


@Injectable()
export class DialogMessagesEffects {
  @Effect() getInitialDialog = this.actions$.pipe(
    ofType(DialogActions.GET_INITIAL_DIALOG),
    switchMap((action: DialogActions.GetInitialDialog) => {
        return this.dialogService.getMessagesInDialog(action.payload.to, 1)
          .pipe(
            map(response => {
              return new DialogActions.SetDialog(response);
            })
          )
      }
    )
  );

  @Effect() getMessagesInDialog = this.actions$.pipe(
    ofType(DialogActions.GET_DIALOG),
    switchMap((action: DialogActions.GetDialog) => {
        return this.dialogService.getMessagesInDialog(action.payload.to, action.payload.page)
          .pipe(
            map(response => {
              return new DialogActions.FillDialog(response);
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
    private dialogService: DialogService
  ) {}
}
