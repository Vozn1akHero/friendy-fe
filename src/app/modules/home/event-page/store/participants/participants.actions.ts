import { EventParticipant } from "src/app/shared/models/event-participant.model";
import { Action } from "@ngrx/store";

export const GET_EXEMPLARY = "[Event Page] Get Exemplary Participants";
export const SET_EXEMPLARY = "[Event Page] Set Exemplary Participants";
export const GET_INITIAL = "[Event Page] Get Participants";
export const SET_INITIAL = "[Event Page] Set Participants";
export const START_FILLING = "[Event Page] Start Filling Participants";
export const FILL = "[Event Page] Fill Participants";

export class GetExemplary implements Action {
  readonly type = GET_EXEMPLARY;
  constructor(public payload: { id: number }) {}
}

export class SetExemplary implements Action {
  readonly type = SET_EXEMPLARY;
  constructor(public payload: { id: number; value: EventParticipant[] }) {}
}

export class GetInitial implements Action {
  readonly type = GET_INITIAL;
  constructor(public payload: { id: number }) {}
}

export class SetInitial implements Action {
  readonly type = SET_INITIAL;
  constructor(public payload: { id: number; value: EventParticipant[] }) {}
}

export class StartFilling implements Action {
  readonly type = START_FILLING;
  constructor(public payload: { id: number; page: number }) {}
}

export class Fill implements Action {
  readonly type = FILL;
  constructor(
    public payload: { id: number; page: number; value: EventParticipant[] }
  ) {}
}

export type Actions =
  | GetInitial
  | SetInitial
  | GetExemplary
  | SetExemplary
  | Fill
  | StartFilling;
