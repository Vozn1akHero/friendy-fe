import {Action} from '@ngrx/store';
import Post from '../../models/post.model';

export const ADD_POST = '[Profile Page] Add Post Start';
export const SET_ADDED_POST = '[Profile Page] Add Post';
export const REMOVE_POST_FROM_STATE = '[Profile Page] Remove Post';
export const REMOVE_POST = '[Profile Page] Remove Post Start';
export const LIKE_POST = '[Profile Page] Like Post';
export const LIKE_POST_START = '[Profile Page] Like Post Start';
export const UNLIKE_POST_START = '[Profile Page] Unlike Post Start';
export const UNLIKE_POST = '[Profile Page] Unlike Post';
export const GET_USER_POSTS = '[Profile Page] Get User Posts';
export const SET_USER_POSTS = '[Profile Page] Set User Posts';

export class SetAddedPost implements Action {
  readonly type = SET_ADDED_POST;

  constructor(public payload: Post) {}
}

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public payload: Post) {}
}

export class GetUserPosts implements Action {
  readonly type = GET_USER_POSTS;

  constructor() {}
}

export class SetUserPosts implements Action {
  readonly type = SET_USER_POSTS;

  constructor(public payload: Post[]) {}
}

export class RemovePost implements Action {
  readonly type = REMOVE_POST;

  constructor(public payload: {id: number}) {}
}

export class RemovePostFromState implements Action {
  readonly type = REMOVE_POST_FROM_STATE;

  constructor(public payload: {id: number}) {}
}

export class LikePostStart implements Action {
  readonly type = LIKE_POST_START;

  constructor(public payload: { id: number } ) {}
}

export class LikePost implements Action {
  readonly type = LIKE_POST;

  constructor(public payload: any) {}
}

export class UnlikePostStart implements Action {
  readonly type = UNLIKE_POST_START;

  constructor(public payload: { id: number } ) {}
}

export class UnlikePost implements Action {
  readonly type = UNLIKE_POST;

  constructor(public payload: any) {}
}



export type UserPostsActions = SetAddedPost
  | AddPost
  | GetUserPosts
  | SetUserPosts
  | RemovePost
  | RemovePostFromState
  | LikePostStart
  | LikePost
  | UnlikePostStart
  | UnlikePost;
