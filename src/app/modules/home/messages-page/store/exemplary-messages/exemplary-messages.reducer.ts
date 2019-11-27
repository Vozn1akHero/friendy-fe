import * as ExemplaryMessagesActions from './exemplary-messages.actions'
import ExemplaryMessage from '../../models/exemplary-message.model';


export interface State {
  exemplaryMessages: ExemplaryMessage[];
  loaded: boolean;
}

const initialState: State = {
  exemplaryMessages: [],
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
      };
    case ExemplaryMessagesActions.SET_EXEMPLARY_MESSAGES:
      return {
        ...state,
        exemplaryMessages: [...action.payload, ...state.exemplaryMessages],
        loaded: true
      };
    default:
      return state;
  }
}
