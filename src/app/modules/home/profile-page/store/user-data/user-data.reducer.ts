import * as UserActions from './user-data.actions'
import User from '../../models/user.model';

export interface State {
  user: User;
  loaded: boolean;
}

const initialState: State = {
  user: null,
  loaded: false
};

//export const selectUser = (state: State) => state.user;

export function userDataReducer(
  state: State = initialState,
  action: UserActions.Actions
) : State {
  switch (action.type) {
    case UserActions.GET_USER_DATA:
      return {
        ...state
      };
    case UserActions.SET_USER_DATA:
      return {
        ...state,
        loaded: true,
        user: action.payload
      };
    default:
      return state;
  }
}
