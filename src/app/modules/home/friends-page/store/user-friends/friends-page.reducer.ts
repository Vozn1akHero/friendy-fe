import * as UserFriendsActions from './friends-page.actions';


export interface State {
  friends: any[];
  loading: boolean;
}

const initialState: State = {
  loading: false,
  friends: []
};

export function userFriendsReducer(
  state: State = initialState,
  action: UserFriendsActions.FriendsPageActions
) {
  switch (action.type) {
    case UserFriendsActions.GET_FRIENDS_START:
      return {
        ...state,
        loading: true
      };
    case UserFriendsActions.GET_FRIENDS:
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
    case UserFriendsActions.FILTER_FRIENDS: {
      return {
        ...state,
        friends: action.payload
      }
    }
    default:
      return state;
  }
}
