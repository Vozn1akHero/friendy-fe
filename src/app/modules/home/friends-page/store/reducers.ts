import * as fromFriendsSearchPageInitialList from './user-list/user-list.reducer'
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  friendsSearchInitialList: fromFriendsSearchPageInitialList.State
}

export const friendsSearchPageReducerMap: ActionReducerMap<AppState> = {
  friendsSearchInitialList: fromFriendsSearchPageInitialList.userListReducer
};
