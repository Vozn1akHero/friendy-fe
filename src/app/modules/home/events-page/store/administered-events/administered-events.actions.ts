import {Action} from '@ngrx/store';
import Event from '../../models/event.model';

export const GET_ADMINISTERED_EVENTS = '[Events Page] Get Administered Events';
export const SET_ADMINISTERED_EVENTS = '[Events Page] Set Administered Events';
export const FILTER_EVENTS = '[Events Page] Filter Administered Events';
export const SET_FILTERED_EVENTS = '[Events Page] Set Filtered Administered Events';
export const SET_DEFAULT_EVENTS = '[Events Page] Set Default Administered Events';

export class GetAdministeredEvents implements Action {
  readonly type = GET_ADMINISTERED_EVENTS;

  constructor() {}
}

export class SetAdministeredEvents implements Action {
  readonly type = SET_ADMINISTERED_EVENTS;

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

export type AdministeredEventsActions = GetAdministeredEvents
  | SetAdministeredEvents | FilterEvents | SetFilteredEvents | SetDefaultEvents

