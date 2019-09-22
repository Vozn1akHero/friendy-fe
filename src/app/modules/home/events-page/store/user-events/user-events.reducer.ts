import * as UserEventsActions from './user-events.actions'
import Event from '../../models/event.model';


export interface State {
  events: Event[];
  loading: boolean;
}

const initialState: State = {
  events: [],
  loading: false
};

export function userEventsReducer(
  state: State = initialState,
  action: UserEventsActions.UserEventsActions
) {
  switch (action.type) {
    case UserEventsActions.GET_EVENTS_START:
      return {
        ...state,
        loading: true
      };
    case UserEventsActions.GET_EVENTS:
      return {
        ...state,
        loading: false,
        events: action.payload
      };
    default:
      return state;
  }
}
