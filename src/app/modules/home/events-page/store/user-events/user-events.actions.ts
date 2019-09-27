import {Action} from '@ngrx/store';
import Event from '../../models/event.model';

export const GET_EVENTS = '[Events Page] Get Events';
export const GET_EVENTS_START = '[Events Page] Get Events Start';



export class GetEventsStart implements Action {
  readonly type = GET_EVENTS_START;

  constructor() {}
}

export class GetEvents implements Action {
  readonly type = GET_EVENTS;

  constructor(public payload: Event[]) {}
}



export type UserEventsActions = GetEventsStart
  | GetEvents


