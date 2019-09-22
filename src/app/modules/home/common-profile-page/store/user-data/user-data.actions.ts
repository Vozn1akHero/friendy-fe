import { Action } from '@ngrx/store';
import User from '../../../../../data/models/user.model';


export const GET_USER_START = '[CommonProfile] CommonProfile Start';
export const GET_USER = '[CommonProfile] CommonProfile Get User';
export const USER_NOT_FOUND = '[CommonProfile] CommonProfile User Not Found';


export class GetUserStart implements Action {
  readonly type = GET_USER_START;

  constructor(public payload: { id: number }) {}
}

export class GetUser implements Action {
  readonly type = GET_USER;

  constructor(public payload: User) {}
}


export class UserNotFound implements Action {
  readonly type = USER_NOT_FOUND;

  constructor() {}
}


export type UserDataActions =
  | GetUserStart
  | GetUser
  | UserNotFound;
