import { FriendRequest } from "../../models/friend-request.model";
import * as SentFriendRequestActions from "./sent-friend-request.actions";
import { stat } from "fs";

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
  action: SentFriendRequestActions.Actions
): State {
  switch (action.type) {
    case SentFriendRequestActions.GET:
      return {
        ...state
      };
    case SentFriendRequestActions.SET:
      return {
        ...state,
        loaded: true,
        entries: action.payload
      };
    case SentFriendRequestActions.SET_FOUND:
      return {
        ...state,
        foundEntries: {
          ...state.foundEntries,
          [action.payload.keyword]: action.payload.entries
        }
      };
    case SentFriendRequestActions.FILL_FOUND_BY_KEYWORD_IN_STATE: {
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
