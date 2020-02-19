import {ActionReducerMap, createSelector, SelectorWithProps} from '@ngrx/store';
import * as eventPageParticipation from './participation/participation.reducer';
import * as eventPageEventData from './event-data/event-data.reducer';

export interface AppState {
  eventPageParticipation: eventPageParticipation.State;
  eventPageEventData: eventPageEventData.State;
}

export const eventPageReducerMap : ActionReducerMap<AppState> = {
  eventPageParticipation: eventPageParticipation.participationReducer,
  eventPageEventData: eventPageEventData.eventDataReducer
};
