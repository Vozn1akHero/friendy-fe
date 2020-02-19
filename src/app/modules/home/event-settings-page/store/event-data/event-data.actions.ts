import {Action} from '@ngrx/store';
import EventDataModel from '../../models/event-data.model';
import NewEventDataModel from '../../models/new-event-data.model';

export const GET = '[Event Settings Page] Get Event Data';
export const SET = '[Event Settings Page] Set Event Data';
export const UPDATE_DATA = '[Event Settings Page] Update Data';
export const SET_UPDATED_DATA = '[Event Settings Page] Set Updated Data';
export const UPDATE_AVATAR = '[Event Settings Page] Update Avatar';
export const SET_UPDATED_AVATAR = '[Event Settings Page] Set Updated Avatar';
export const UPDATE_BACKGROUND = '[Event Settings Page] Update Background';
export const SET_UPDATED_BACKGROUND = '[Event Settings Page] Set Updated Background';

export class SetEventData implements Action {
  readonly type = SET;

  constructor(public payload: EventDataModel) {}
}
export class GetEventData implements Action {
  readonly type = GET;

  constructor(public payload: {eventId: number}) {}
}

export class UpdateData implements Action{
  readonly type = UPDATE_DATA;
  constructor(public payload: NewEventDataModel){}
}
export class SetUpdatedData implements Action{
  readonly type = SET_UPDATED_DATA;
  constructor(public payload: EventDataModel){}
}

export class UpdateAvatar implements Action{
  readonly type = UPDATE_AVATAR;
  constructor(public payload: {eventId: number, image: File}){}
}
export class SetUpdatedAvatar implements Action{
  readonly type = SET_UPDATED_AVATAR;
  constructor(public payload: {eventId: number, src: string}){}
}

export class UpdateBackground implements Action{
  readonly type = UPDATE_BACKGROUND;
  constructor(public payload: {eventId: number, image: File}){}
}
export class SetUpdatedBackground implements Action{
  readonly type = SET_UPDATED_BACKGROUND;
  constructor(public payload: {eventId: number, src: string}){}
}

export type EventDataActions = GetEventData
  | UpdateData | SetUpdatedData |
  SetEventData | UpdateAvatar | SetUpdatedAvatar |
  UpdateBackground | SetUpdatedBackground;
