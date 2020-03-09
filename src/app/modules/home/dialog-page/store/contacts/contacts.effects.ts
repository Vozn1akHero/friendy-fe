import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map} from 'rxjs/operators';
import * as FriendListActions from './contacts.actions';
import {FriendListService} from '../../services/friend-list.service';


@Injectable()
export class ContactsEffects {
  @Effect() getDialogList = this.actions$.pipe(
    ofType(FriendListActions.GET_CONTACTS),
    switchMap((action: FriendListActions.GetContacts) => {
        return this.friendListService.getFriendList(action.payload.page)
          .pipe(
            map(res => {
              console.log(res)
              return new FriendListActions.SetContacts(res);
            })
          )
      }
    )
  );

  constructor(
    private actions$: Actions,
    private friendListService: FriendListService
  ) {}
}
