import {Action} from '@ngrx/store';
import Event from '../../models/event.model';

export const GET_EVENTS = '[Events Page] Get Events';
export const SET_EVENTS = '[Events Page] Set Events';

export class GetEvents implements Action {
  readonly type = GET_EVENTS;
  constructor() {}
}

export class SetEvents implements Action {
  readonly type = SET_EVENTS;
  constructor(public payload: Event[]) {}
}

export type UserEventsActions = GetEvents
  | SetEvents


