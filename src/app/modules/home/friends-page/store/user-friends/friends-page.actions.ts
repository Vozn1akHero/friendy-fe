import {Action} from '@ngrx/store';
import Friend from '../../models/friend.model';
//import Friend from '../models/friend.model';

export const GET_FRIENDS = '[Friends Page] Get Friends Start';
export const SET_FRIENDS = '[Friends Page] Set Friends';
export const FILTER_FRIENDS = '[Friends Page] Filter Friends Start';
export const SET_FILTERED_FRIENDS = '[Friends Page] Filter Friends';


export class GetFriends implements Action {
  readonly type = GET_FRIENDS;

  constructor(public payload: {startIndex: number, lastIndex: number}) {}
}

export class SetFriends implements Action {
  readonly type = SET_FRIENDS;

  constructor(public payload: Friend[]) {}
}

export class FilterFriends implements Action{
  readonly type = FILTER_FRIENDS;

  constructor(public payload: { keyword: string }){}
}

export class SetFilteredFriends implements Action{
  readonly type = SET_FILTERED_FRIENDS;

  constructor(public payload: any){}
}


export type FriendsPageActions = GetFriends | SetFriends | SetFilteredFriends | FilterFriends;
