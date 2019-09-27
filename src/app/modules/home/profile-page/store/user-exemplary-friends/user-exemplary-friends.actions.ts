import {Action} from '@ngrx/store';
import {ExemplaryFriend} from '../../models/exemplary-friend.model';

export const GET_EXEMPLARY_FRIENDS_START = '[Profile Page] Get Exemplary Friends Start';
export const GET_EXAMPLE_FRIENDS = '[Profile Page] Get Exemplary Friends ';

export class GetExemplaryFriends implements Action {
  readonly type = GET_EXAMPLE_FRIENDS;

  constructor(public payload: ExemplaryFriend[]) {}
}

export class GetExemplaryFriendsStart implements Action {
  readonly type = GET_EXEMPLARY_FRIENDS_START;

  constructor() {}
}


export type Actions = GetExemplaryFriends | GetExemplaryFriendsStart;


