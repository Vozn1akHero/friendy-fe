import { ActionReducerMap } from '@ngrx/store';
import * as fromMessagesPageExemplaryMessages from '../../../modules/home/messages-page/store/exemplary-messages/exemplary-messages.reducer';
import * as fromDialogPageDialogMessages from '../../../modules/home/dialog-page/store/dialog-messages/dialog-messages.reducer';
import * as fromDialogPageDialogList from '../../../modules/home/dialog-page/store/dialog-list/dialog-list.reducer';
import * as fromFriendsPageUserFriends from '../../../modules/home/friends-page/store/user-friends/user-friends.reducer';
import * as fromEventsPageUserEvents from '../../../modules/home/events-page/store/user-events/user-events.reducer';
import * as fromEventsPageAdministeredEvents from '../../../modules/home/events-page/store/administered-events/administered-events.reducer';
//import * as fromEventPageEventData from '../../../modules/home/event-page/store/event-data/event-data.reducer';
import {commentPanelReducerMap} from '../../../modules/shared/post/comment-panel/store/reducers';
import {eventPageReducerMap} from '../../../modules/home/event-page/store/reducers'
import {eventSettingsPageReducerMap} from '../../../modules/home/event-settings-page/store/reducers'
import {profilePageReducerMap} from '../../../modules/home/profile-page/store/reducers'
import {friendsSearchPageReducerMap} from '../../../modules/home/friends-page/store/reducers'

export interface AppState {
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
  ...profilePageReducerMap,

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
  ...eventSettingsPageReducerMap,
  ...friendsSearchPageReducerMap
};
