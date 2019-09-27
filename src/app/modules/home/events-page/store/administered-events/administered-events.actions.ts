import {Action} from '@ngrx/store';
import Event from '../../models/event.model';

export const GET_ADMINISTERED_EVENTS_START = '[Events Page] Get Administered Events Start';
export const GET_ADMINISTERED_EVENTS = '[Events Page] Get Administered Events';
export const FILTER_ADMINISTERED_EVENTS_START = '[Events Page] Filter Administered Events Start';
export const FILTER_ADMINISTERED_EVENTS = '[Events Page] Filter Administered Events';


export class GetAdministeredEventsStart implements Action {
  readonly type = GET_ADMINISTERED_EVENTS_START;

  constructor() {}
}

export class GetAdministeredEvents implements Action {
  readonly type = GET_ADMINISTERED_EVENTS;

  constructor(public payload: Event[]) {}
}

export class FilterAdministeredEventsStart implements Action{
  readonly type = FILTER_ADMINISTERED_EVENTS_START;

  constructor(public payload: { keyword: string }){}
}

export class FilterAdministeredEvents implements Action{
  readonly type = FILTER_ADMINISTERED_EVENTS;

  constructor(public payload: Event[]){}
}


export type AdministeredEventsActions = GetAdministeredEventsStart
  | GetAdministeredEvents | FilterAdministeredEvents | FilterAdministeredEventsStart


