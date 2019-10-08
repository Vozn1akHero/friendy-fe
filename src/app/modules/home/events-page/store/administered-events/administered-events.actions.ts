import {Action} from '@ngrx/store';
import Event from '../../models/event.model';

export const GET_ADMINISTERED_EVENTS = '[Events Page] Get Administered Events';
export const SET_ADMINISTERED_EVENTS = '[Events Page] Set Administered Events';
export const FILTER_ADMINISTERED_EVENTS = '[Events Page] Filter Administered Events';
export const SET_FILTER_ADMINISTERED_EVENTS = '[Events Page] Set Filter Administered Events';


export class GetAdministeredEvents implements Action {
  readonly type = GET_ADMINISTERED_EVENTS;

  constructor() {}
}

export class SetAdministeredEvents implements Action {
  readonly type = SET_ADMINISTERED_EVENTS;

  constructor(public payload: Event[]) {}
}

export class FilterAdministeredEvents implements Action{
  readonly type = FILTER_ADMINISTERED_EVENTS;

  constructor(public payload: { keyword: string }){}
}

export class SetFilteredAdministeredEvents implements Action{
  readonly type = SET_FILTER_ADMINISTERED_EVENTS;

  constructor(public payload: Event[]){}
}


export type AdministeredEventsActions = GetAdministeredEvents
  | SetAdministeredEvents | FilterAdministeredEvents | SetFilteredAdministeredEvents


