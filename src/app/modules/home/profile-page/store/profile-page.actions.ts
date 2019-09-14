import { Action } from '@ngrx/store';
import User from '../../../../data/schema/user';
import {Post} from '../models/post.model';

export const START_REQUEST = '[Profile Page] Start Request';
export const UPDATE_USER_DATA = '[Profile Page] Update UserData';
export const ADD_POST = '[Profile Page] Add Post';
export const ADD_POST_START = '[Profile Page] Add Post Start';
export const REMOVE_POST = '[Profile Page] Remove Post';
export const LIKE_POST = '[Profile Page] Like Post';
export const GET_USER_POSTS = '[Profile Page] Get User Posts';

export class UpdateUserData implements Action {
  readonly type = UPDATE_USER_DATA;

  constructor(public payload: User) {}
}

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public payload: Post) {}
}

export class AddPostStart implements Action {
  readonly type = ADD_POST_START;

  constructor(public payload: Post) {}
}

export class RemovePost implements Action {
  readonly type = REMOVE_POST;

  constructor(public payload: Post ) {}
}

export class GetPosts implements Action {
  readonly type = GET_USER_POSTS;

  constructor(public payload: Post[]) {}
}

export class LikePost implements Action {
  readonly type = LIKE_POST;

  constructor(public payload: Post ) {}
}


export type ProfilePageActions =
  | UpdateUserData
  | AddPost
  | GetPosts
  | RemovePost
  | LikePost;
