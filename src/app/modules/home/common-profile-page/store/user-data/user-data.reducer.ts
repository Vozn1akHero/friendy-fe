import * as ProfilePageActions from './user-data.actions'
import User from '../../../profile-page/models/user.model';


export interface State {
  user: User;
  users: User[];
  loading: boolean;
  userNotFound: boolean;
}

const initialState: State = {
  user: null,
  users: [],
  loading: false,
  userNotFound: false
};

export function userDataReducer(
  state: State = initialState,
  action: ProfilePageActions.UserDataActions
) {
  switch (action.type) {
    case ProfilePageActions.GET_USER_START:
      return {
        ...state,
        loading: true
      };
    case ProfilePageActions.GET_USER:
      return {
        ...state,
        loading: false,
        users: [action.payload, ...state.users]
      };
    case ProfilePageActions.USER_NOT_FOUND:
      return {
        ...state,
        loading: false,
        userNotFound: true
      };
    default:
      return state;
  }
}
