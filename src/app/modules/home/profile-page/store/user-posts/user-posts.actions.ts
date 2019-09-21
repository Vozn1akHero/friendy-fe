import {Action} from '@ngrx/store';
import Post from '../../models/post.model';

export const ADD_POST = '[Profile Page] Add Post';
export const ADD_POST_START = '[Profile Page] Add Post Start';
export const REMOVE_POST = '[Profile Page] Remove Post';
export const REMOVE_POST_START = '[Profile Page] Remove Post Start';
export const LIKE_POST = '[Profile Page] Like Post';
export const LIKE_POST_START = '[Profile Page] Like Post Start';
export const GET_USER_POSTS = '[Profile Page] Get User Posts';
export const GET_USER_POSTS_START = '[Profile Page] Get User Posts Start';

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public payload: Post) {}
}

export class AddPostStart implements Action {
  readonly type = ADD_POST_START;

  constructor(public payload: Post) {}
}

export class GetUserPostsStart implements Action {
  readonly type = GET_USER_POSTS_START;

  constructor() {}
}

export class GetUserPosts implements Action {
  readonly type = GET_USER_POSTS;

  constructor(public payload: Post[]) {}
}

export class RemovePostStart implements Action {
  readonly type = REMOVE_POST_START;

  constructor(public payload: {id: number}) {}
}

export class RemovePost implements Action {
  readonly type = REMOVE_POST;

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


export type UserPostsActions = AddPost
  | AddPostStart
  | GetUserPosts
  | GetUserPostsStart
  | RemovePost
  | LikePostStart
  | RemovePostStart
  | LikePost;


