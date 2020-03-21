import { ActionReducerMap } from "@ngrx/store";
import * as eventPageParticipation from "./participation/participation.reducer";
import * as eventPageEventData from "./event-data/event-data.reducer";
import * as eventPageParticipants from "./participants/participants.reducer";

export interface AppState {
  eventPageParticipation: eventPageParticipation.State;
  eventPageEventData: eventPageEventData.State;
  eventPageParticipants: eventPageParticipants.State;
}

export const eventPageReducerMap: ActionReducerMap<AppState> = {
  eventPageParticipation: eventPageParticipation.participationReducer,
  eventPageEventData: eventPageEventData.eventDataReducer,
  eventPageParticipants: eventPageParticipants.participantsReducer
};
