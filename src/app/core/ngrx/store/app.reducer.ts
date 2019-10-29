import { ActionReducerMap } from '@ngrx/store';

import * as fromProfilePageUserPosts from '../../../modules/home/profile-page/store/user-posts/user-posts.reducer';
import * as fromProfilePageUserData from '../../../modules/home/profile-page/store/user-data/user-data.reducer';
import * as fromProfilePageAvatar from '../../../modules/home/profile-page/store/user-avatar/user-avatar.reducer';

import * as fromMessagesPageExemplaryMessages from '../../../modules/home/messages-page/store/exemplary-messages/exemplary-messages.reducer';
import * as fromMessagesPageDialogMessages from '../../../modules/home/dialog-page/store/dialog-messages/dialog-messages.reducer';

import * as fromProfilePageExemplaryFriends from '../../../modules/home/profile-page/store/user-exemplary-friends/user-exemplary-friends.reducer';
import * as fromFriendsPageUserFriends from '../../../modules/home/friends-page/store/user-friends/user-friends.reducer';

import * as fromEventsPageUserEvents from '../../../modules/home/events-page/store/user-events/user-events.reducer';
import * as fromEventsPageAdministeredEvents from '../../../modules/home/events-page/store/administered-events/administered-events.reducer';

import * as fromEventPageEventData from '../../../modules/home/event-page/store/event-data/event-data.reducer';

import * as fromCommonProfilePageUserData from '../../../modules/home/common-profile-page/store/user-data/user-data.reducer';


export interface AppState {
  //profile page
  profilePageUserPosts: fromProfilePageUserPosts.State;
  profilePageUserData: fromProfilePageUserData.State;
  profilePageUserExemplaryFriends: fromProfilePageExemplaryFriends.State;
  profilePageUserAvatar: fromProfilePageAvatar.State;

  //friends page
  friendsPageUserFriends: fromFriendsPageUserFriends.State;

  //messages page
  messagesPageExemplaryMessages: fromMessagesPageExemplaryMessages.State;
  messagesPageDialog: fromMessagesPageDialogMessages.State;

  //common profile page
  commonProfilePageUserData: fromCommonProfilePageUserData.State;

  //events page
  eventsPageUserEvents: fromEventsPageUserEvents.State;
  eventsPageAdministeredEventsReducer: fromEventsPageAdministeredEvents.State;

  //event page
  eventPageEventData: fromEventPageEventData.State
}

export const appReducer: ActionReducerMap<AppState> = {
  //profile page
  profilePageUserPosts: fromProfilePageUserPosts.userPostsReducer,
  profilePageUserData: fromProfilePageUserData.userDataReducer,
  profilePageUserAvatar: fromProfilePageAvatar.userAvatarReducer,
  profilePageUserExemplaryFriends: fromProfilePageExemplaryFriends.userExemplaryFriendsReducer,

  //friends page
  friendsPageUserFriends: fromFriendsPageUserFriends.userFriendsReducer,

  //messages page
  messagesPageExemplaryMessages: fromMessagesPageExemplaryMessages.exemplaryMessagesReducer,
  messagesPageDialog: fromMessagesPageDialogMessages.dialogMessagesReducer,

  //common profile page
  commonProfilePageUserData: fromCommonProfilePageUserData.userDataReducer,

  //events page
  eventsPageUserEvents: fromEventsPageUserEvents.userEventsReducer,
  eventsPageAdministeredEventsReducer: fromEventsPageAdministeredEvents.administeredEventsReducer,

  //event page
  eventPageEventData: fromEventPageEventData.eventDataReducer
};
