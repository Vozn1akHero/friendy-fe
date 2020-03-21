import { Action } from "@ngrx/store";
import ExemplaryFriend from "../../models/exemplary-friend.model";

export const GET_EXEMPLARY_FRIENDS = "[Profile Page] Get Exemplary Friends";
export const SET_EXEMPLARY_FRIENDS = "[Profile Page] Set Exemplary Friends";

export class SetExemplaryFriends implements Action {
  readonly type = SET_EXEMPLARY_FRIENDS;

  constructor(
    public payload: {
      id: number;
      entries: ExemplaryFriend[];
    }
  ) {}
}

export class GetExemplaryFriends implements Action {
  readonly type = GET_EXEMPLARY_FRIENDS;

  constructor(public payload: { id: number }) {}
}

export type Actions = GetExemplaryFriends | SetExemplaryFriends;
