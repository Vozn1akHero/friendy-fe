import * as UserExemplaryFriendsActions from './user-exemplary-friends.actions'
import ExemplaryFriend from '../../models/exemplary-friend.model';


export interface State {
  exemplaryFriends: ExemplaryFriend[];
  loaded: boolean;
}

const initialState: State = {
  loaded: false,
  exemplaryFriends: []
};

export function userExemplaryFriendsReducer(
  state: State = initialState,
  action: UserExemplaryFriendsActions.Actions
) {
  switch (action.type) {
    case UserExemplaryFriendsActions.GET_EXEMPLARY_FRIENDS:
      return {
        ...state
      };
    case UserExemplaryFriendsActions.SET_EXEMPLARY_FRIENDS:
      return {
        ...state,
        loaded: true,
        exemplaryFriends: action.payload
      };
    default:
      return state;
  }
}
