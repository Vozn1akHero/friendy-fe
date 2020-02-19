import {Action} from '@ngrx/store';
import {ParticipationRequestModel} from '../../models/participation-request.model';

export const GET = '[Events Settings] Get Participant Requests';
export const SET = '[Events Settings] Set Participant Requests';
export const CONFIRM = '[Events Settings] Confirm Participant Request';
export const DELETE = '[Events Settings] Delete Participant Request';
export const REMOVE_FROM_STATE = '[Events Settings] Remove Participant Request From State';

export class Get implements Action{
  readonly type = GET;
  constructor(public payload: {eventId: number, page: number}){}
}
export class Set implements Action{
  readonly type = SET;
  constructor(public payload: ParticipationRequestModel[]){}
}

export class Confirm implements Action{
  readonly type = CONFIRM;
  constructor(public payload: {eventId: number, issuerId: number}){}
}

export class Delete implements Action{
  readonly type = DELETE;
  constructor(public payload: {eventId: number, issuerId: number}){}
}

export class RemoveFromState implements Action{
  readonly type = REMOVE_FROM_STATE;
  constructor(public payload: {eventId: number, issuerId: number}){}
}

export type Actions = Get | Set | Confirm | Delete | RemoveFromState;
