import * as UserActions from './user-data.actions'
import User from '../../models/user.model';

export interface State {
  user: User;
  loading: boolean;
}

const initialState: State = {
  user: null,
  loading: false
};

//export const selectUser = (state: State) => state.user;

export function userDataReducer(
  state: State = initialState,
  action: UserActions.Actions
) : State {
  switch (action.type) {
    case UserActions.GET_USER_DATA:
      return {
        ...state,
        loading: true
      };
    case UserActions.SET_USER_DATA:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    default:
      return state;
  }
}
