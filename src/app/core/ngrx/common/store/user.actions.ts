import { Action } from '@ngrx/store';
import User from '../../../../data/schema/user';

export const GET_USER_START = '[User] Get User Start';
export const GET_USER = '[User] Get User';


export class GetUserStart implements Action {
  readonly type = GET_USER_START;

  constructor(){}
}

export class GetUser implements Action {
  readonly type = GET_USER;

  constructor(public payload: User){

  }
}

export type UserActions = GetUserStart | GetUser
