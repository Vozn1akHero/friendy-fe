import { Action } from '@ngrx/store';
import MessageInChat from '../../models/message-in-chat.model';
import NewMessageInChat from '../../models/new-message-in-chat.model';


export const GET_DIALOG = '[Messages Page] Get Dialog';
export const SET_DIALOG = '[Messages Page] Set Dialog';
export const ADD_NEW_MESSAGE = '[Messages Page] Add New Message';
export const SET_ADDED_MESSAGE = '[Messages Page] Set Added Message';

export class GetDialog implements Action {
  readonly type = GET_DIALOG;

  constructor(public payload: {chatHash: string}){}
}

export class SetDialog implements Action {
  readonly type = SET_DIALOG;

  constructor(public payload: MessageInChat[]){}
}

export class AddNewMessage implements Action {
  readonly type = ADD_NEW_MESSAGE;

  constructor(public payload: {chatHash: string, newMessage: NewMessageInChat}){}
}

export class SetAddedMessage implements Action {
  readonly type = SET_ADDED_MESSAGE;

  constructor(public payload: MessageInChat){}
}

export type Actions = GetDialog | SetDialog | AddNewMessage | SetAddedMessage
