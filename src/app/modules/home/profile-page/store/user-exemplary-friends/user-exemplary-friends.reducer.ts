import * as UserExemplaryFriendsActions from "./user-exemplary-friends.actions";
import UserFriend from "../../models/user-friend.model";

export interface State {
  exemplaryFriends: { [id: number]: UserFriend[] };
  loaded: { [id: number]: boolean };
}

const initialState: State = {
  loaded: {},
  exemplaryFriends: {}
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
        loaded: {
          ...state.loaded,
          [action.payload.id]: true
        },
        exemplaryFriends: {
          ...state.exemplaryFriends,
          [action.payload.id]: action.payload.entries
        }
      };
    default:
      return state;
  }
}
