import { FriendRequest } from "./../../models/friend-request.model";
import { Action } from "@ngrx/store";

export const GET = "[Received Friend Requests] Get";
export const SET = "[Received Friend Requests] Set";
export const FIND_BY_KEYWORD = "[Received Friend Requests] Find By Keyword";
export const SET_FOUND = "[Received Friend Requests] Set Found";
export const FILL_FOUND_BY_KEYWORD =
  "[Received Friend Requests] Fill Found By Keyword";
export const FILL_FOUND_BY_KEYWORD_IN_STATE =
  "[Received Friend Requests] Fill Found By Keyword In State";

export class Get implements Action {
  readonly type = GET;

  constructor(
    public payload: {
      page: number;
      length: number;
    }
  ) {}
}

export class Set implements Action {
  readonly type = SET;

  constructor(public payload: FriendRequest[]) {}
}

export class FindByKeyword implements Action {
  readonly type = FIND_BY_KEYWORD;

  constructor(
    public payload: {
      keyword: string;
    }
  ) {}
}

export class SetFound implements Action {
  readonly type = SET_FOUND;

  constructor(
    public payload: {
      keyword: string;
      entries: FriendRequest[];
    }
  ) {}
}

export class FillFoundByKeyword implements Action {
  readonly type = FILL_FOUND_BY_KEYWORD;

  constructor(
    public payload: {
      keyword: string;
      page: number;
      length: number;
    }
  ) {}
}

export class FillFoundByKeywordInState implements Action {
  readonly type = FILL_FOUND_BY_KEYWORD_IN_STATE;

  constructor(
    public payload: {
      keyword: string;
      entries: FriendRequest[];
    }
  ) {}
}

export type Actions =
  | Get
  | Set
  | FillFoundByKeyword
  | FillFoundByKeywordInState
  | FindByKeyword
  | SetFound;
