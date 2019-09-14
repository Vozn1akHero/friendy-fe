import { Action } from '@ngrx/store';
import User from '../../../../data/schema/user';
import {Post} from '../models/post.model';


export const GET_USER_START = '[CommonProfile] CommonProfile Start';
export const GET_USER = '[CommonProfile] CommonProfile Get User';
export const GET_POSTS = '[CommonProfile] CommonProfile Get Posts';
export const LIKE_POST = '[CommonProfile] CommonProfile Like Post';
export const USER_NOT_FOUND = '[CommonProfile] CommonProfile User Not Found';


export class GetUserStart implements Action {
  readonly type = GET_USER_START;

  constructor(public payload: { id: number }) {}
}

export class GetUser implements Action {
  readonly type = GET_USER;

  constructor(public payload: User) {}
}

export class LikePost implements Action {
  readonly type = LIKE_POST;

  constructor(public payload: Post) {}
}

export class UserNotFound implements Action {
  readonly type = USER_NOT_FOUND;

  constructor() {}
}


export type CommonProfilePageActions =
  | GetUserStart
  | GetUser
  | LikePost | UserNotFound;
