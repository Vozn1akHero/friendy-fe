import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as UserListActions from './user-list.actions';
import {map, switchMap} from 'rxjs/operators';
import {FriendsSearchService} from '../../services/friends-search.service';
import { AppState } from '../reducers';
import {Store} from '@ngrx/store';

@Injectable()
export class UserListEffects {
  @Effect() getInitial = this.actions$.pipe(
    ofType(UserListActions.GET_INITIAL_LIST),
    switchMap((action: UserListActions.GetInitialList) => {
      return this.friendsSearchService.getInitialUserList(action.payload.page).pipe(map(res=>{
        return this.store.dispatch(new UserListActions.SetInitialList(res))
      }))
    })
  );

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private friendsSearchService : FriendsSearchService) {
  }
}
