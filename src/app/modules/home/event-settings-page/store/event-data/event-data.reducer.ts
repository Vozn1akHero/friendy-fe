import * as EventBasicDataActions from './event-data.actions';
import EventDataModel from '../../models/event-data.model';

export interface State {
  eventBasicData: {[id: string]: EventDataModel};
  loaded: boolean;
}

const initialState: State = {
  eventBasicData: {},
  loaded: false
};

export function eventDataReducer(
  state: State = initialState,
  action: EventBasicDataActions.EventDataActions
) {
  switch (action.type) {
    case EventBasicDataActions.SET:
      return {
        ...state,
        loaded: true,
        eventBasicData: {
          ...state.eventBasicData,
          ...{
            [action.payload.id]: action.payload
          }
        }
      };
    case EventBasicDataActions.SET_UPDATED_AVATAR:
      return {
      ...state,
      eventBasicData: function() {
        state.eventBasicData[action.payload.eventId].avatarUrl = action.payload.src;
        return state.eventBasicData;
      }()
    };
    case EventBasicDataActions.SET_UPDATED_BACKGROUND:
      return {
        ...state,
        eventBasicData: function() {
          state.eventBasicData[action.payload.eventId].backgroundUrl = action.payload.src;
          return state.eventBasicData;
        }()
      };
    case EventBasicDataActions.SET_UPDATED_DATA:
      return {
        ...state,
        eventBasicData: function() {
          state.eventBasicData[action.payload.id] = action.payload;
          return state.eventBasicData;
        }()
      };
    default: return {...state}
  }
}
