import * as UserAvatarActions from './user-avatar.actions'
import UserAvatar from '../../models/user-avatar.model';

export interface State {
  avatar: UserAvatar;
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  avatar: null,
  loaded: false,
  loading: false
};

export function userAvatarReducer(
  state: State = initialState,
  action: UserAvatarActions.Actions
) : State {
  switch (action.type) {
    case UserAvatarActions.GET_USER_AVATAR:
      return {
        ...state
      };
    case UserAvatarActions.SET_USER_AVATAR:
      return {
        ...state,
        avatar: action.payload,
        loaded: true
      };
    case UserAvatarActions.UPDATE_USER_AVATAR:
      return {
        ...state,
        loading: true
      };
    case UserAvatarActions.SET_UPDATED_USER_AVATAR:
      return {
        ...state,
        loading: false,
        avatar: action.payload
      };
    default:
      return state;
  }
}
