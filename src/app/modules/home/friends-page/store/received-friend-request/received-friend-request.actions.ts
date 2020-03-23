import { FriendRequest } from "./../../models/friend-request.model";
import { Action } from "@ngrx/store";

export const GET = "[Friends Page] Get Received Friend Requests";
export const SET = "[Friends Page] Set";

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

export type Actions = Get | Set;
