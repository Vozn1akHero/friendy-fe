import { Action } from '@ngrx/store';
import User from '../../models/user.model';

export const GET_USER_DATA = '[Profile Page] Get User Data';
export const SET_USER_DATA = '[Profile Page] Set User Data';


export class GetUserData implements Action {
  readonly type = GET_USER_DATA;

  constructor(){}
}

export class SetUserData implements Action {
  readonly type = SET_USER_DATA;

  constructor(public payload: User){
  }
}

export type Actions = SetUserData | GetUserData
