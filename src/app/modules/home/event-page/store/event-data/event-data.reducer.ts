import * as EventDataActions from './event-data.actions'
import EventShortened from '../../models/event-shortened.model';


export interface State {
  events: EventShortened[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  events: [],
  loading: false,
  loaded: false
};

export function eventDataReducer(
  state: State = initialState,
  action: EventDataActions.EventDataActions
) {
  switch (action.type) {
    case EventDataActions.GET_EVENT_DATA:
      return {
        ...state,
        loading: true
      };
    case EventDataActions.SET_EVENT_DATA:
      return {
        ...state,
        events: [...this.state.events, action.payload],
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
}
