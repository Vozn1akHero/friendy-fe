import * as UserAvatarActions from './user-avatar.actions'

export interface State {
  avatarUrl: string;
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  avatarUrl: null,
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
        avatarUrl: action.payload.userAvatarUrl,
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
        avatarUrl: action.payload.userAvatarUrl
      };
    default:
      return state;
  }
}
