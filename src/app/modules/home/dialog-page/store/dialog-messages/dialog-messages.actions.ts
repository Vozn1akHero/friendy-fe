import { Action } from '@ngrx/store';
import MessageInChat from '../../models/message-in-chat.model';


export const GET_DIALOG = '[Messages Page] Get Dialog';
export const SET_DIALOG = '[Messages Page] Set Dialog';

export class GetDialog implements Action {
  readonly type = GET_DIALOG;

  constructor(public payload: {chatHash: string}){}
}

export class SetDialog implements Action {
  readonly type = SET_DIALOG;

  constructor(public payload: MessageInChat[]){}
}

export type Actions = GetDialog | SetDialog
