import * as UserEventsActions from './user-events.actions'
import Event from '../../models/event.model';


export interface State {
  events: Event[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  events: [],
  loading: false,
  loaded: false
};

export function userEventsReducer(
  state: State = initialState,
  action: UserEventsActions.UserEventsActions
) {
  switch (action.type) {
    case UserEventsActions.GET_EVENTS:
      return {
        ...state,
        loading: true
      };
    case UserEventsActions.SET_EVENTS:
      return {
        ...state,
        loading: false,
        loaded: true,
        events: action.payload
      };
    default:
      return state;
  }
}
