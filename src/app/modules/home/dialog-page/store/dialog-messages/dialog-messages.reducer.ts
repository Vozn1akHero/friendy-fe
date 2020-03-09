import * as DialogActions from './dialog-messages.actions';
import MessageInChatModel from '../../models/message-in-chat.model';

export interface State {
  dialogs: any[];
  messagesInDialog: MessageInChatModel[];
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  dialogs: [],
  messagesInDialog: [],
  loaded: false,
  loading: true
};

export function dialogMessagesReducer(
  state: State = initialState,
  action: DialogActions.Actions
) : State {
  switch (action.type) {
    case DialogActions.GET_DIALOG:
      return {
        ...state,
        loading: true
      };
    case DialogActions.GET_INITIAL_DIALOG:
      return {
        ...state,
        messagesInDialog: [],
        loaded: false
      };
    case DialogActions.SET_DIALOG:
      return {
        ...state,
        messagesInDialog: action.payload,
        loaded: true,
        loading: false
      };
    case DialogActions.FILL_DIALOG:
      return {
        ...state,
        messagesInDialog: [...state.messagesInDialog, ...action.payload],
        loading: false
      };
    case DialogActions.ADD_NEW_MESSAGE:
      return {
        ...state
      };
    case DialogActions.SET_ADDED_MESSAGE:{
      return {
        ...state,
        messagesInDialog: [...state.messagesInDialog, action.payload]
      }
    }
    default:
      return state;
  }
}
