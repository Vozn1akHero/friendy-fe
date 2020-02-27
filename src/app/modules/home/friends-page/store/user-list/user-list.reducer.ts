import * as UserListActions from './user-list.actions'
import FoundUserModel from '../../models/found-user.model';

export interface State {
  users: FoundUserModel[];
  loaded: boolean;
}

const initialState: State = {
  users: [],
  loaded: false
};

export function userListReducer(
  state: State = initialState,
  action: UserListActions.Actions
) : State {
  switch (action.type) {
    case UserListActions.GET_INITIAL_LIST:
      return {
        ...state
      };
    case UserListActions.SET_INITIAL_LIST:
      return {
        ...state,
        loaded: true,
        users: [...state.users, ...action.payload]
      };
    default:
      return state;
  }
}
