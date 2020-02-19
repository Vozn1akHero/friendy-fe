import * as EventDataActions from './participation.actions';
import {PARTICIPATION_STATUS} from '../../models/participation-status.enum';

export interface State {
  participationStatus: PARTICIPATION_STATUS;
  loaded: boolean;
}

const initialState: State = {
  participationStatus: null,
  loaded: false
};

export function participationReducer(
  state: State = initialState,
  action: EventDataActions.Actions
) {
  switch (action.type) {
    case EventDataActions.SET:
      return {
        ...state,
        loaded: true,
        participationStatus: action.payload
      };
    case EventDataActions.LEAVE:
      return {
        ...state,
        participationStatus: PARTICIPATION_STATUS.NonParticipant
      };
    case EventDataActions.SEND_REQUEST:
      return {
        ...state,
        participationStatus: PARTICIPATION_STATUS.RequestSent
      };
    case EventDataActions.REMOVE_REQUEST:
      return {
        ...state,
        participationStatus: PARTICIPATION_STATUS.NonParticipant
      };
    default: return {...state}
  }
}
