import * as UserActions from './user-data.actions'
import User from '../../models/user.model';

export interface State {
  profiles: {[id: number]: User};
  loaded: boolean;
}

const initialState: State = {
  profiles: [],
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
        profiles: {...state.profiles, ...action.payload}
      };
    default:
      return state;
  }
}
