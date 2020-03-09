import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {map, tap, withLatestFrom, take, filter, mergeMap, exhaustMap, mapTo, concatMap} from 'rxjs/operators';
import * as DialogListActions from './dialog-list.actions';
import {DialogListService} from '../../services/dialog-list.service';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers';

@Injectable()
export class DialogListEffects {
  @Effect() getDialogList = this.actions$.pipe(
    ofType(DialogListActions.GET_DIALOG_LIST),
    withLatestFrom(this.store.select(e=>e.fromDialogPageDialogList.loaded)),
    filter(([{payload}, loaded]) => {
      return !loaded
    }),
    mergeMap(([{payload}]: any) => {
      return this.dialogListService.getByPage(payload.page)
        .pipe(
          map(messages => {
            return new DialogListActions.SetDialogList(messages);
          })
        )
      }
    )
  );

  constructor(
    private actions$: Actions,
    private dialogListService: DialogListService,
    private store: Store<AppState>
  ) {}
}
