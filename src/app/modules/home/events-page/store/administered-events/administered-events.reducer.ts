import * as AdministeredEventsActions from './administered-events.actions';
import Event from '../../models/event.model';


export interface State {
  administeredEvents: Event[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  administeredEvents: [],
  loaded: false,
  loading: false
};

export function administeredEventsReducer(
  state: State = initialState,
  action: AdministeredEventsActions.AdministeredEventsActions
) {
  switch (action.type) {
    case AdministeredEventsActions.GET_ADMINISTERED_EVENTS:
      return {
        ...state,
        loading: true
      };
    case AdministeredEventsActions.SET_ADMINISTERED_EVENTS:
      return {
        ...state,
        loading: false,
        loaded: true,
        administeredEvents: action.payload
      };
    case AdministeredEventsActions.FILTER_ADMINISTERED_EVENTS:
      return {
        ...state,
        loading: true
      };
    case AdministeredEventsActions.SET_FILTER_ADMINISTERED_EVENTS:
      return {
        ...state,
        loading: false,
        administeredEvents: action.payload
      };
    default:
      return state;
  }
}
