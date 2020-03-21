import { Action } from "@ngrx/store";
import EventShortened from "../../models/event-shortened.model";

export const GET_EVENT_DATA = "[Event Page] Get Event Data";
export const SET_EVENT_DATA = "[Event Page] Set Event Data";

export class GetEventData implements Action {
  readonly type = GET_EVENT_DATA;
  constructor(public payload: { id: number }) {}
}

export class SetEventData implements Action {
  readonly type = SET_EVENT_DATA;
  constructor(public payload: { id: number; value: EventShortened }) {}
}

export type EventDataActions = GetEventData | SetEventData;
