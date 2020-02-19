import {ActionReducerMap} from '@ngrx/store';
import * as eventSettingsPageBasicData from './event-data/event-data.reducer'
import * as participationRequestReducer from './participation-request/participation-request.reducer'

export interface AppState {
  eventSettingsPageBasicData: eventSettingsPageBasicData.State;
  eventSettingsParticipationRequest: participationRequestReducer.State;
}

export const eventSettingsPageReducerMap : ActionReducerMap<AppState> = {
  eventSettingsPageBasicData: eventSettingsPageBasicData.eventDataReducer,
  eventSettingsParticipationRequest: participationRequestReducer.participationRequestReducer
};
