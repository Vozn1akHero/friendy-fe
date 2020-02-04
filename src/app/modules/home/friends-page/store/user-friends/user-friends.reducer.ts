import * as UserFriendsActions from './user-friends.actions';
import Friend from '../../models/friend.model';


export interface State {
  friends: Friend[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  loading: false,
  loaded: false,
  friends: []
};

export function userFriendsReducer(
  state: State = initialState,
  action: UserFriendsActions.UserFriendsActions
) {
  switch (action.type) {
    case UserFriendsActions.GET_FRIENDS:
      return {
        ...state,
        loading: true
      };
    case UserFriendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        loaded: true
      };
    case UserFriendsActions.REMOVE_FRIEND_FROM_STATE:
      return {
        ...state,
        friends: [...state.friends.filter(value => value.id !== action.payload.id)]
      };
    case UserFriendsActions.SET_FILTERED_FRIENDS:
      return {
        ...state,
        friends: action.payload
      };
    default:
      return state;
  }
}
