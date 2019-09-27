import * as AdministeredEventsActions from './administered-events.actions';
import Event from '../../models/event.model';


export interface State {
  administeredEvents: Event[];
  loading: boolean;
}

const initialState: State = {
  administeredEvents: [],
  loading: false
};

export function administeredEventsReducer(
  state: State = initialState,
  action: AdministeredEventsActions.AdministeredEventsActions
) {
  switch (action.type) {
    case AdministeredEventsActions.GET_ADMINISTERED_EVENTS_START:
      return {
        ...state,
        loading: true
      };
    case AdministeredEventsActions.GET_ADMINISTERED_EVENTS:
      return {
        ...state,
        loading: false,
        administeredEvents: action.payload
      };
    case AdministeredEventsActions.FILTER_ADMINISTERED_EVENTS_START:
      return {
        ...state,
        loading: true
      };
    case AdministeredEventsActions.FILTER_ADMINISTERED_EVENTS:
      return {
        ...state,
        loading: false,
        administeredEvents: action.payload
      };
    default:
      return state;
  }
}
