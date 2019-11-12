import { Action } from '@ngrx/store';
import UserAvatar from '../../models/user-avatar.model';

export const GET_USER_AVATAR = '[Profile Page] Get User Avatar';
export const SET_USER_AVATAR = '[Profile Page] Set User Avatar';
export const UPDATE_USER_AVATAR  = '[Profile Page] Update User Avatar';
export const SET_UPDATED_USER_AVATAR = '[Profile Page] Set Updated User Avatar';

export class GetUserAvatar implements Action {
  readonly type = GET_USER_AVATAR;

  constructor(public payload: { userId : number }){}
}

export class SetUserAvatar implements Action {
  readonly type = SET_USER_AVATAR;

  constructor(public payload: { userAvatarUrl : string }){}
}

export class UpdateUserAvatar implements Action {
  readonly type = UPDATE_USER_AVATAR;

  constructor(public payload: File){}
}

export class SetUpdatedUserAvatar implements Action {
  readonly type = SET_UPDATED_USER_AVATAR;

  constructor(public payload: { userAvatarUrl : string }){}
}

export type Actions = GetUserAvatar | SetUserAvatar | SetUpdatedUserAvatar | UpdateUserAvatar
