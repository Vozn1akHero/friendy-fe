import { FriendRequest } from "./../../models/friend-request.model";
import * as ReceivedFriendRequestActions from "./received-friend-request.actions";

export interface State {
  loaded: boolean;
  entries: FriendRequest[];
  foundEntries: { [keyword: string]: FriendRequest[] };
}

export const initialState: State = {
  loaded: false,
  entries: [],
  foundEntries: {}
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
    case ReceivedFriendRequestActions.SET_FOUND:
      return {
        ...state,
        foundEntries: {
          ...state.foundEntries,
          [action.payload.keyword]: action.payload.entries
        }
      };
    case ReceivedFriendRequestActions.FILL_FOUND_BY_KEYWORD_IN_STATE: {
      return {
        ...state,
        foundEntries: (function() {
          state.foundEntries[action.payload.keyword].push(
            ...action.payload.entries
          );
          return state.foundEntries;
        })()
      };
    }
    default:
      return state;
  }
}
