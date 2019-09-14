import User from '../../../../data/schema/user';
import * as UserActions from './user.actions'

export interface State {
  user: User;
  loading: boolean;
}

const initialState: State = {
  user: null,
  loading: false
};

//export const selectUser = (state: State) => state.user;

export function userReducer(
  state: State = initialState,
  action: UserActions.UserActions
) : State {
  switch (action.type) {
    case UserActions.GET_USER_START:
      return {
        ...state,
        loading: true
      };
    case UserActions.GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    default:
      return state;
  }
}
