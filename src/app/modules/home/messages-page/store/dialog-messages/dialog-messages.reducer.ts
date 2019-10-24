import * as DialogActions from './dialog-messages.actions'
import MessageInChat from '../../models/message-in-chat.model';


export interface State {
  messagesInDialog: MessageInChat[];
  //loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  messagesInDialog: [],
  // loading: false,
  loaded: false
};

export function dialogMessagesReducer(
  state: State = initialState,
  action: DialogActions.Actions
) : State {
  switch (action.type) {
    case DialogActions.GET_DIALOG:
      return {
        ...state,
        //loading: true
      };
    case DialogActions.SET_DIALOG:
      return {
        ...state,
        messagesInDialog: action.payload,
        loaded: true
      };
    default:
      return state;
  }
}
