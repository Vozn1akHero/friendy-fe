import { ActionReducerMap } from '@ngrx/store';

import * as userPosts from '../../../modules/home/profile-page/store/user-posts/user-posts.reducer';
import * as userFriends from '../../../modules/home/friends-page/store/user-friends/friends-page.reducer';
import * as fromCommonProfilePage from '../../../modules/home/common-profile-page/store/common-profile-page.reducer';
import * as fromUser from '../user/user.reducer';

export interface AppState {
  commonProfilePage: fromCommonProfilePage.State;
  userPosts: userPosts.State;
  userFriends: userFriends.State;
  user: fromUser.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  user: fromUser.userReducer,
  userPosts: userPosts.userPostsReducer,
  userFriends: userFriends.userFriendsReducer,
  commonProfilePage: fromCommonProfilePage.commonProfilePageReducer
};
