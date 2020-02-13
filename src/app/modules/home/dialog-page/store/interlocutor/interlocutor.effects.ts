import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map} from 'rxjs/operators';
import * as InterlocutorActions from './interlocutor.actions';
import {DialogService} from '../../services/dialog.service';


@Injectable()
export class DialogListEffects {
  @Effect() getDialogList = this.actions$.pipe(
    ofType(InterlocutorActions.GET_INTERLOCUTOR),
    switchMap((action: InterlocutorActions.GetInterlocutor) => {
        return this.dialogService.getChatFriendData(action.payload.interlocutorId)
          .pipe(
            map(messages => {
              return new InterlocutorActions.SetInterlocutor(messages);
            })
          )
      }
    )
  );

  constructor(
    private actions$: Actions,
    private dialogService: DialogService
  ) {}
}
