import {Action} from '@ngrx/store';
import Post from '../../models/post.model';
import NewPost from '../../models/new-post.model';

export const ADD_POST = '[Profile Page] Add Post Start';
export const SET_ADDED_POST = '[Profile Page] Add Post';
export const REMOVE_POST_FROM_STATE = '[Profile Page] Remove Post';
export const REMOVE_POST = '[Profile Page] Remove Post Start';
export const LIKE_POST = '[Profile Page] Like Post';
export const LIKE_POST_IN_STATE = '[Profile Page] Like Post In State';
export const UNLIKE_POST = '[Profile Page] Unlike Post Start';
export const UNLIKE_POST_IN_STATE = '[Profile Page] Unlike Post In State';
export const GET_USER_POSTS = '[Profile Page] Get User Posts';
export const SET_USER_POSTS = '[Profile Page] Set User Posts';
export const START_FULFILLING_USER_POSTS = '[Profile Page] Start Fulfilling User Posts';
export const FULFILL_USER_POSTS = '[Profile Page] Fulfill User Posts';

export class SetAddedPost implements Action {
  readonly type = SET_ADDED_POST;

  constructor(public payload: Post) {}
}

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public payload: NewPost) {}
}

export class StartFulfillingUserPosts implements Action {
  readonly type = START_FULFILLING_USER_POSTS;

  constructor(public payload: { userId: number }) {}
}

export class FulfillUserPosts implements Action {
  readonly type = FULFILL_USER_POSTS;

  constructor(public payload: Post[]) {}
}

export class GetUserPosts implements Action {
  readonly type = GET_USER_POSTS;

  constructor(public payload: { userId: number }) {}
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

export class LikePost implements Action {
  readonly type = LIKE_POST;

  constructor(public payload: { id: number } ) {}
}

export class LikePostInState implements Action {
  readonly type = LIKE_POST_IN_STATE;

  constructor(public payload: { id: number }) {}
}

export class UnlikePost implements Action {
  readonly type = UNLIKE_POST;

  constructor(public payload: { id: number } ) {}
}

export class UnlikePostInState implements Action {
  readonly type = UNLIKE_POST_IN_STATE;

  constructor(public payload: { id: number }) {}
}


export type UserPostsActions = SetAddedPost
  | AddPost
  | GetUserPosts
  | SetUserPosts
  | RemovePost
  | RemovePostFromState
  | LikePost
  | StartFulfillingUserPosts
  | FulfillUserPosts
  | LikePostInState
  | UnlikePost
  | UnlikePostInState;
