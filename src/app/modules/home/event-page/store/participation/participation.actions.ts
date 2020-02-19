import {Action} from '@ngrx/store';
import {PARTICIPATION_STATUS} from '../../models/participation-status.enum';

export const SET = "[Participation] Set";
export const GET = "[Participation] Get";
export const REMOVE_REQUEST = "[Participation] Remove Request";
export const SEND_REQUEST = "[Participation] Send Request";
export const LEAVE = "[Participation] Leave Event";

export class Get implements Action{
  readonly type = GET;
  constructor(public payload: {eventId: number}){}
}

export class Set implements Action{
  readonly type = SET;
  constructor(public payload: PARTICIPATION_STATUS){}
}

export class RemoveRequest implements Action{
  readonly type = REMOVE_REQUEST;
  constructor(public payload: {eventId: number}){}
}

export class SendRequest implements Action{
  readonly type = SEND_REQUEST;
  constructor(public payload: {eventId: number}){}
}

export class Leave implements Action{
  readonly type = LEAVE;
  constructor(public payload: {eventId: number}){}
}

export type Actions = Get | Set | RemoveRequest | SendRequest | Leave
