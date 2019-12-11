import {Action} from '@ngrx/store';
import Event from '../../models/event.model';

export const GET_EVENTS = '[Events Page] Get Events';
export const SET_EVENTS = '[Events Page] Set Events';
export const FILTER_EVENTS = '[Events Page] Filter Events';
export const SET_FILTERED_EVENTS = '[Events Page] Set Filtered Events';
export const SET_DEFAULT_EVENTS = '[Events Page] Set Default Events';

export class GetEvents implements Action {
  readonly type = GET_EVENTS;
  constructor() {}
}

export class SetEvents implements Action {
  readonly type = SET_EVENTS;
  constructor(public payload: Event[]) {}
}

export class FilterEvents implements Action{
  readonly type = FILTER_EVENTS;

  constructor(public payload: { keyword: string }){}
}

export class SetFilteredEvents implements Action{
  readonly type = SET_FILTERED_EVENTS;

  constructor(public payload: Event[]){}
}


export class SetDefaultEvents implements Action{
  readonly type = SET_DEFAULT_EVENTS;

  constructor(){}
}

export type UserEventsActions = GetEvents
  | SetEvents | FilterEvents | SetFilteredEvents | SetDefaultEvents


