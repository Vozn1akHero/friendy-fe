import InterlocutorDataModel from '../../models/interlocutor-data.model';
import * as InterlocutorActions from './interlocutor.actions';

export interface State {
  interlocutor: InterlocutorDataModel,
  loaded: boolean;
}

const initialState: State = {
  interlocutor: null,
  loaded: false
};

export function interlocutorReducer(
  state: State = initialState,
  action: InterlocutorActions.Actions
) : State {
  switch (action.type) {
    case InterlocutorActions.GET_INTERLOCUTOR:
      return {
        ...state
      };
    case InterlocutorActions.SET_INTERLOCUTOR:
      return {
        interlocutor: action.payload,
        loaded: true
      };
    default:
      return state;
  }
}
