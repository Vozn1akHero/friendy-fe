import { Action } from '@ngrx/store';
import {FriendModel} from '../../models/friend.model';


export const GET_CONTACTS = '[Dialog Page] Get Contacts';
export const SET_CONTACTS = '[Dialog Page] Set Contacts';

export class GetContacts implements Action {
  readonly type = GET_CONTACTS;

  constructor(public payload: { page: number }){}
}

export class SetContacts implements Action {
  readonly type = SET_CONTACTS;

  constructor(public payload: FriendModel[]){}
}

export type Actions = GetContacts | SetContacts;
