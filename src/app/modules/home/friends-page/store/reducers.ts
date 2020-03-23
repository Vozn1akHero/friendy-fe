import { ReceivedFriendRequestEffects } from "./received-friend-request/received-friend-request.effects";
import * as fromFriendsSearchPageInitialList from "./user-list/user-list.reducer";
import * as fromFriendsPageReceivedFriendRequest from "./received-friend-request/received-friend-request.reducer";
import * as fromFriendsPageSentFriendRequest from "./sent-friend-request/sent-friend-request.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  friendsSearchInitialList: fromFriendsSearchPageInitialList.State;
  receivedFriendRequest: fromFriendsPageReceivedFriendRequest.State;
  sentFriendRequest: fromFriendsPageSentFriendRequest.State;
}

export const friendsSearchPageReducerMap: ActionReducerMap<AppState> = {
  friendsSearchInitialList: fromFriendsSearchPageInitialList.userListReducer,
  receivedFriendRequest: fromFriendsPageReceivedFriendRequest.reducer,
  sentFriendRequest: fromFriendsPageSentFriendRequest.reducer
};
