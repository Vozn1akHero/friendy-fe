import { ActionReducerMap } from '@ngrx/store';

import * as fromProfilePageUserPosts from '../../../modules/home/profile-page/store/user-posts/user-posts.reducer';
import * as fromProfilePageUserFriends from '../../../modules/home/friends-page/store/user-friends/friends-page.reducer';
import * as fromEventsPageUserEvents from '../../../modules/home/events-page/store/user-events/user-events.reducer';
import * as fromCommonProfilePageUserData from '../../../modules/home/common-profile-page/store/user-data/user-data.reducer';
import * as fromUser from '../user/user.reducer';

export interface AppState {
  //profile page
  profilePageUserPosts: fromProfilePageUserPosts.State;
  profilePageUserFriends: fromProfilePageUserFriends.State;

  //common profile page
  commonProfilePageUserData: fromCommonProfilePageUserData.State;

  //events page
  eventsPageUserEvents: fromEventsPageUserEvents.State;

  //common
  user: fromUser.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  //profile page
  profilePageUserPosts: fromProfilePageUserPosts.userPostsReducer,
  profilePageUserFriends: fromProfilePageUserFriends.userFriendsReducer,

  //common profile page
  commonProfilePageUserData: fromCommonProfilePageUserData.userDataReducer,

  //events page
  eventsPageUserEvents: fromEventsPageUserEvents.userEventsReducer,

  //common
  user: fromUser.userReducer
};
