import { Action } from "@ngrx/store";
import UserFriend from "../../models/user-friend.model";

export const GET_INITIAL = "[User Friends] Get";
export const SET_INITIAL = "[User Friends] Set";
export const START_FILLING = "[User Friends] Start Filling";
export const FILL = "[User Friends] Fill";

export class SetInitial implements Action {
  readonly type = SET_INITIAL;

  constructor(
    public payload: {
      id: number;
      entries: UserFriend[];
    }
  ) {}
}

export class GetInitial implements Action {
  readonly type = GET_INITIAL;

  constructor(public payload: { id: number }) {}
}

export class StartFilling implements Action {
  readonly type = START_FILLING;
  constructor(public payload: { id: number; page: number; length: number }) {}
}

export class Fill implements Action {
  readonly type = FILL;
  constructor(
    public payload: { id: number; page: number; entries: UserFriend[] }
  ) {}
}

export type Actions = GetInitial | SetInitial | StartFilling | Fill;
