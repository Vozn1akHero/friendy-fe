import * as UserExemplaryFriendsActions from './user-exemplary-friends.actions'
import ExemplaryFriend from '../../models/exemplary-friend.model';


export interface State {
  exemplaryFriends: ExemplaryFriend[];
  loading: boolean;
}

const initialState: State = {
  loading: true,
  exemplaryFriends: []
};

export function userExemplaryFriendsReducer(
  state: State = initialState,
  action: UserExemplaryFriendsActions.Actions
) {
  switch (action.type) {
    case UserExemplaryFriendsActions.GET_EXEMPLARY_FRIENDS:
      return {
        ...state,
        loading: true
      };
    case UserExemplaryFriendsActions.SET_EXEMPLARY_FRIENDS:
      return {
        ...state,
        loading: false,
        exemplaryFriends: action.payload
      };
    default:
      return state;
  }
}
