import * as UserEventsActions from './user-events.actions'
import Event from '../../models/event.model';

export interface State {
  defaultEvents: Event[];
  events: Event[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  defaultEvents: [],
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
        defaultEvents: action.payload,
        events: action.payload
      };
    case UserEventsActions.FILTER_EVENTS:
      return {
        ...state,
        loading: true
      };
    case UserEventsActions.SET_FILTERED_EVENTS:
      return {
        ...state,
        loading: false,
        events: action.payload
      };
    default:
      return state;
  }
}
