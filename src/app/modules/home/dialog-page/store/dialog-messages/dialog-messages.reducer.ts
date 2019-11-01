import * as DialogActions from './dialog-messages.actions';
import MessageInChat from '../../models/message-in-chat.model';
import {act} from '@ngrx/effects';
import MessageInChatModel from '../../models/message-in-chat.model';

export interface State {
  dialogs: any[];
  messagesInDialog: MessageInChatModel[];
  loaded: boolean;
}

const initialState: State = {
  dialogs: [],
  messagesInDialog: [],
  loaded: false
};

export function dialogMessagesReducer(
  state: State = initialState,
  action: DialogActions.Actions
) : State {
  switch (action.type) {
    case DialogActions.GET_DIALOG:
      return {
        ...state
      };
    case DialogActions.SET_DIALOG:
      return {
        ...state,
        messagesInDialog: action.payload,
        loaded: true
      };
    case DialogActions.ADD_NEW_MESSAGE:
      return {
        ...state
      };
    case DialogActions.SET_ADDED_MESSAGE:{
      return {
        ...state,
        messagesInDialog: [...state.messagesInDialog, {
          ...action.payload,
          isUserAuthor: true
        }]
      }
    }
    default:
      return state;
  }
}
