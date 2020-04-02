import * as UserFriendActions from "./user-friends.actions";
import ExemplaryFriend from "../../models/user-friend.model";

export interface State {
  entries: { [id: number]: ExemplaryFriend[] };
  pages: { [id: number]: number };
  loaded: { [id: number]: boolean };
  loading: boolean;
}

const initialState: State = {
  loaded: {},
  pages: {},
  entries: {},
  loading: false
};

export function userFriendsReducer(
  state: State = initialState,
  action: UserFriendActions.Actions
) {
  switch (action.type) {
    case UserFriendActions.GET_INITIAL:
      return {
        ...state,
        loading: true
      };
    case UserFriendActions.SET_INITIAL:
      return {
        ...state,
        loaded: {
          ...state.loaded,
          [action.payload.id]: true
        },
        entries: {
          ...state.entries,
          [action.payload.id]: action.payload.entries
        },
        pages: {
          ...state.pages,
          [action.payload.id]: 1
        },
        loading: false
      };
    case UserFriendActions.START_FILLING:
      return {
        ...state,
        loading: true
      };
    case UserFriendActions.FILL:
      return {
        ...state,
        entries: (() => {
          state.entries[action.payload.id].push(...action.payload.entries);
          return state.entries;
        })(),
        pages: (() => {
          state.pages[action.payload.id] = action.payload.page;
          return state.pages;
        })(),
        loading: false
      };
    default:
      return state;
  }
}
