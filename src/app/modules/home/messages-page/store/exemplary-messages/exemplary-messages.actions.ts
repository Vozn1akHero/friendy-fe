import { Action } from '@ngrx/store';
import ExemplaryMessage from '../../models/exemplary-message.model';

export const GET_EXEMPLARY_MESSAGES = '[Messages Page] Get Exemplary Messages';
export const SET_EXEMPLARY_MESSAGES = '[Messages Page] Set Exemplary Messages';
export const ADD_NEW_OR_UPDATE_EXEMPLARY_MESSAGE = '[Messages Page] Add New Or Update Exemplary Message';

export class GetExemplaryMessages implements Action {
  readonly type = GET_EXEMPLARY_MESSAGES;

  constructor(public payload: { startIndex: number, length: number }){}
}

export class SetExemplaryMessages implements Action {
  readonly type = SET_EXEMPLARY_MESSAGES;

  constructor(public payload: ExemplaryMessage[]){}
}

export class AddNewOrUpdateExemplaryMessage implements Action{
  readonly type = ADD_NEW_OR_UPDATE_EXEMPLARY_MESSAGE;

  constructor(public payload: ExemplaryMessage){
  }
}

export type Actions = GetExemplaryMessages | SetExemplaryMessages | AddNewOrUpdateExemplaryMessage
