import * as fromDialogPageFriendListReducer from './contacts/contacts.reducer';
import * as fromDialogPageInterlocutorReducer from './interlocutor/interlocutor.reducer';
import * as fromDialogPageDialogListReducer from './dialog-list/dialog-list.reducer';
import * as fromDialogPageDialogMessagesReducer from './dialog-messages/dialog-messages.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  fromDialogPageContacts: fromDialogPageFriendListReducer.State,
  fromDialogPageInterlocutor: fromDialogPageInterlocutorReducer.State,
  fromDialogPageDialogList: fromDialogPageDialogListReducer.State,
  fromDialogPageDialogMessages: fromDialogPageDialogMessagesReducer.State
}

export const dialogPageReducerMap: ActionReducerMap<AppState> = {
  fromDialogPageDialogList: fromDialogPageDialogListReducer.dialogListReducer,
  fromDialogPageDialogMessages: fromDialogPageDialogMessagesReducer.dialogMessagesReducer,
  fromDialogPageInterlocutor: fromDialogPageInterlocutorReducer.interlocutorReducer,
  fromDialogPageContacts: fromDialogPageFriendListReducer.contactsReducer
};
