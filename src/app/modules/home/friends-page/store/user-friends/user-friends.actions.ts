import { Action } from "@ngrx/store";
import Friend from "../../models/friend.model";
//import Friend from '../models/friend.model';

export const GET_START_FRIEND_LIST = "[Friends Page] Get Start Friend List";
export const SET_START_FRIEND_LIST = "[Friends Page] Set Start Friend List";
export const GET_FRIENDS = "[Friends Page] Get Friends";
export const SET_FRIENDS = "[Friends Page] Set Friends";
export const FILTER_FRIENDS = "[Friends Page] Filter Friends Start";
export const SET_FILTERED_FRIENDS = "[Friends Page] Filter Friends";
export const REMOVE_FRIEND = "[Friends Page] Remove Friend";
export const REMOVE_FRIEND_FROM_STATE =
  "[Friends Page] Remove Friend From State";

export class GetStartFriendList implements Action {
  readonly type = GET_START_FRIEND_LIST;

  constructor() {}
}
export class SetStartFriendList implements Action {
  readonly type = SET_START_FRIEND_LIST;

  constructor(public payload: Friend[]) {}
}

export class GetFriends implements Action {
  readonly type = GET_FRIENDS;

  constructor(public payload: { page: number; length: number }) {}
}

export class SetFriends implements Action {
  readonly type = SET_FRIENDS;

  constructor(public payload: Friend[]) {}
}

export class FilterFriends implements Action {
  readonly type = FILTER_FRIENDS;

  constructor(public payload: { keyword: string }) {}
}

export class SetFilteredFriends implements Action {
  readonly type = SET_FILTERED_FRIENDS;

  constructor(public payload: any) {}
}

export class RemoveFriend implements Action {
  readonly type = REMOVE_FRIEND;

  constructor(public payload: { id: number }) {}
}

export class RemoveFriendFromState implements Action {
  readonly type = REMOVE_FRIEND_FROM_STATE;

  constructor(public payload: { id: number }) {}
}

export type UserFriendsActions =
  | GetStartFriendList
  | SetStartFriendList
  | GetFriends
  | SetFriends
  | SetFilteredFriends
  | FilterFriends
  | RemoveFriend
  | RemoveFriendFromState;
