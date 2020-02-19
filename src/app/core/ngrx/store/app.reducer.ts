import { ActionReducerMap } from '@ngrx/store';

import * as fromProfilePageUserPosts from '../../../modules/home/profile-page/store/user-posts/user-posts.reducer';
import * as fromProfilePageUserData from '../../../modules/home/profile-page/store/user-data/user-data.reducer';
import * as fromProfilePageAvatar from '../../../modules/home/profile-page/store/user-avatar/user-avatar.reducer';

import * as fromMessagesPageExemplaryMessages from '../../../modules/home/messages-page/store/exemplary-messages/exemplary-messages.reducer';

import * as fromDialogPageDialogMessages from '../../../modules/home/dialog-page/store/dialog-messages/dialog-messages.reducer';
import * as fromDialogPageDialogList from '../../../modules/home/dialog-page/store/dialog-list/dialog-list.reducer';

import * as fromProfilePageExemplaryFriends from '../../../modules/home/profile-page/store/user-exemplary-friends/user-exemplary-friends.reducer';
import * as fromFriendsPageUserFriends from '../../../modules/home/friends-page/store/user-friends/user-friends.reducer';

import * as fromEventsPageUserEvents from '../../../modules/home/events-page/store/user-events/user-events.reducer';
import * as fromEventsPageAdministeredEvents from '../../../modules/home/events-page/store/administered-events/administered-events.reducer';

//import * as fromEventPageEventData from '../../../modules/home/event-page/store/event-data/event-data.reducer';
import {commentPanelReducerMap} from '../../../modules/shared/post/comment-panel/store/reducers';
import {eventPageReducerMap} from '../../../modules/home/event-page/store/reducers'
import {eventSettingsPageReducerMap} from '../../../modules/home/event-settings-page/store/reducers'

/*import * as postCommentsPanelComments from '../../../shared/components/comment-panel/store/post-comment/post-comment.reducer';
import * as postCommentsPanelCommentResponses from '../../../shared/components/comment-panel/store/comment-response/comment-response.reducer';*/

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
  
  //dialog
  dialogPageDialog: fromDialogPageDialogMessages.State;
  dialogPageDialogList: fromDialogPageDialogList.State;

  //events page
  eventsPageUserEvents: fromEventsPageUserEvents.State;
  eventsPageAdministeredEvents: fromEventsPageAdministeredEvents.State;

  //event page
  //eventPageEventData: fromEventPageEventData.State


  //responses
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
  
  //dialog page
  dialogPageDialog: fromDialogPageDialogMessages.dialogMessagesReducer,
  dialogPageDialogList: fromDialogPageDialogList.dialogListReducer,

  //events page
  eventsPageUserEvents: fromEventsPageUserEvents.userEventsReducer,
  eventsPageAdministeredEvents: fromEventsPageAdministeredEvents.administeredEventsReducer,

  //event page
  ...eventPageReducerMap,
  ...commentPanelReducerMap,
  ...eventSettingsPageReducerMap
};
