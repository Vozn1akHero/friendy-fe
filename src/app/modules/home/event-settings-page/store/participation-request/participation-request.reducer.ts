
import * as ParticipantRequestActions from './participation-request.actions';
import {ParticipationRequestModel} from '../../models/participation-request.model';

export interface State {
  participantRequests: ParticipationRequestModel[];
  loaded: boolean;
}

const initialState: State = {
  participantRequests: null,
  loaded: false
};

export function participationRequestReducer(
  state: State = initialState,
  action: ParticipantRequestActions.Actions
) {
  switch (action.type) {
    case ParticipantRequestActions.SET:
      return {
        ...state,
        loaded: true,
        participantRequests: action.payload
      };
    case ParticipantRequestActions.REMOVE_FROM_STATE:
      return {
        ...state,
        participantRequests: [...state.participantRequests.filter(value => value.issuerId
          !== action.payload.issuerId)]
      };
    default: return {...state}
  }
}
