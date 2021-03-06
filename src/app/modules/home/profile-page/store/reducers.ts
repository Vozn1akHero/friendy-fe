import { ActionReducerMap } from "@ngrx/store";
import * as fromProfilePageUserPosts from "./user-posts/user-posts.reducer";
import * as fromProfilePageUserData from "./user-data/user-data.reducer";
import * as fromProfilePageExemplaryFriends from "./user-exemplary-friends/user-exemplary-friends.reducer";
import * as fromProfilePageAvatar from "./user-avatar/user-avatar.reducer";
import * as fromProfilePageUserPhotos from "./user-photos/user-photos.reducer";
import * as fromProfilePageUserFriends from "./user-friends/user-friends.reducer";

export interface AppState {
  profilePageUserPosts: fromProfilePageUserPosts.State;
  profilePageUserData: fromProfilePageUserData.State;
  profilePageUserExemplaryFriends: fromProfilePageExemplaryFriends.State;
  profilePageUserAvatar: fromProfilePageAvatar.State;
  profilePageUserPhotos: fromProfilePageUserPhotos.State;
  profilePageUserFriends: fromProfilePageUserFriends.State;
}

export const profilePageReducerMap: ActionReducerMap<AppState> = {
  profilePageUserAvatar: fromProfilePageAvatar.userAvatarReducer,
  profilePageUserData: fromProfilePageUserData.userDataReducer,
  profilePageUserExemplaryFriends:
    fromProfilePageExemplaryFriends.userExemplaryFriendsReducer,
  profilePageUserPosts: fromProfilePageUserPosts.userPostsReducer,
  profilePageUserPhotos: fromProfilePageUserPhotos.userPhotosReducer,
  profilePageUserFriends: fromProfilePageUserFriends.userFriendsReducer
};
