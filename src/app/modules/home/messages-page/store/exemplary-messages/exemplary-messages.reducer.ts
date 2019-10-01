import * as ExemplaryMessagesActions from './exemplary-messages.actions'
import ExemplaryMessage from '../../models/exemplary-message.model';


export interface State {
  exemplaryMessages: ExemplaryMessage[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  exemplaryMessages: [],
  loading: false,
  loaded: false
};

export function exemplaryMessagesReducer(
  state: State = initialState,
  action: ExemplaryMessagesActions.Actions
) : State {
  switch (action.type) {
    case ExemplaryMessagesActions.GET_EXEMPLARY_MESSAGES:
      return {
        ...state,
        loading: true
      };
    case ExemplaryMessagesActions.SET_EXEMPLARY_MESSAGES:
      return {
        ...state,
        loading: false,
        exemplaryMessages: action.payload,
        loaded: true
      };
    default:
      return state;
  }
}
