import { EventParticipant } from "src/app/shared/models/event-participant.model";
import * as ParticipantActions from "./participants.actions";

export interface State {
  participants: { [id: number]: EventParticipant[] };
  initialParticipants: { [id: number]: EventParticipant[] };
  currentPage: { [id: number]: number };
  exemplaryLoaded: { [id: number]: boolean };
  loaded: { [id: number]: boolean };
}

const initialState: State = {
  participants: {},
  initialParticipants: {},
  currentPage: {},
  exemplaryLoaded: {},
  loaded: {}
};

export function participantsReducer(
  state: State = initialState,
  action: ParticipantActions.Actions
) {
  switch (action.type) {
    case ParticipantActions.SET_EXEMPLARY:
      return {
        ...state,
        initialParticipants: {
          ...state.initialParticipants,
          [action.payload.id]: action.payload.value
        },
        exemplaryLoaded: {
          ...state.exemplaryLoaded,
          [action.payload.id]: true
        }
      };
    case ParticipantActions.GET_INITIAL:
      return {
        ...state
      };
    case ParticipantActions.SET_INITIAL:
      return {
        ...state,
        participants: {
          ...state.participants,
          [action.payload.id]: action.payload.value
        },
        currentPage: {
          ...state.currentPage,
          [action.payload.id]: 1
        },
        loaded: {
          ...state.loaded,
          [action.payload.id]: true
        }
      };
    case ParticipantActions.FILL:
      return {
        ...state,
        participants: (function() {
          state.participants[action.payload.id].push(...action.payload.value);
          return state.participants;
        })(),
        currentPage: {
          ...state.currentPage,
          [action.payload.id]: action.payload.page
        }
      };
    default:
      return state;
  }
}
