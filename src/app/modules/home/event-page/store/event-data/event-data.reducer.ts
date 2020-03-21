import * as EventDataActions from "./event-data.actions";
import EventShortened from "../../models/event-shortened.model";

export interface State {
  events: { [id: string]: EventShortened };
  loaded: { [id: string]: boolean };
}

const initialState: State = {
  events: {},
  loaded: {}
};

export function eventDataReducer(
  state: State = initialState,
  action: EventDataActions.EventDataActions
) {
  switch (action.type) {
    case EventDataActions.GET_EVENT_DATA:
      return {
        ...state
      };
    case EventDataActions.SET_EVENT_DATA:
      return {
        ...state,
        events: {
          ...state.events,
          [action.payload.id]: action.payload.value
        },
        loaded: {
          ...state.loaded,
          [action.payload.id]: true
        }
      };
    default:
      return state;
  }
}
