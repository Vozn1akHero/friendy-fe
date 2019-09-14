import * as ProfilePageActions from './common-profile-page.actions'
import User from '../../../../data/schema/user';
import {Observable} from 'rxjs';

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

export function commonProfilePageReducer(
  state: State = initialState,
  action: ProfilePageActions.CommonProfilePageActions
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
