import {Action} from '@ngrx/store';
//import Friend from '../models/friend.model';

export const GET_FRIENDS_START = '[Friends Page] Get Friends Start';
export const GET_FRIENDS = '[Friends Page] Get Friends';
export const FILTER_FRIENDS_START = '[Friends Page] Filter Friends Start';
export const FILTER_FRIENDS = '[Friends Page] Filter Friends';


export class GetFriendsStart implements Action {
  readonly type = GET_FRIENDS_START;

  constructor(public payload: {startIndex: number, lastIndex: number}) {}
}

export class GetFriends implements Action {
  readonly type = GET_FRIENDS;

  constructor(public payload: any) {}
}

export class FilterFriendsStart implements Action{
  readonly type = FILTER_FRIENDS_START;

  constructor(public payload: { keyword: string }){}
}

export class FilterFriends implements Action{
  readonly type = FILTER_FRIENDS;

  constructor(public payload: any){}
}


export type FriendsPageActions = GetFriends | GetFriendsStart | FilterFriendsStart | FilterFriends;
