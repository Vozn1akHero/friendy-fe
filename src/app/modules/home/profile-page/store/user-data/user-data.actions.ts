import { Action } from '@ngrx/store';
import User from '../../../../../data/models/user.model';

export const GET_USER_DATA_START = '[Profile Page] Get User Start Data';
export const GET_USER_DATA = '[Profile Page] Get User Data';


export class GetUserDataStart implements Action {
  readonly type = GET_USER_DATA_START;

  constructor(){}
}

export class GetUserData implements Action {
  readonly type = GET_USER_DATA;

  constructor(public payload: User){

  }
}

export type Actions = GetUserData | GetUserDataStart
