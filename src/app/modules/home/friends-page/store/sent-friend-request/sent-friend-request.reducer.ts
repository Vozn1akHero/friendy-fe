import { FriendRequest } from "../../models/friend-request.model";
import * as ReceivedFriendRequestActions from "./sent-friend-request.actions";

export interface State {
  loaded: boolean;
  entries: FriendRequest[];
}

export const initialState: State = {
  loaded: false,
  entries: []
};

export function reducer(
  state: State = initialState,
  action: ReceivedFriendRequestActions.Actions
): State {
  switch (action.type) {
    case ReceivedFriendRequestActions.GET:
      return {
        ...state
      };
    case ReceivedFriendRequestActions.SET:
      return {
        ...state,
        loaded: true,
        entries: action.payload
      };
    default:
      return state;
  }
}
