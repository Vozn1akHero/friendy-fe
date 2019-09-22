import { Action } from '@ngrx/store';
import Post from '../../models/post.model';

export const GET_POSTS_START = '[CommonProfile] CommonProfile Get Posts Start';
export const GET_POSTS = '[CommonProfile] CommonProfile Get Posts';
export const LIKE_POST_START = '[CommonProfile] CommonProfile Like Post Start';
export const LIKE_POST = '[CommonProfile] CommonProfile Like Post';

export class GetPostsStart implements Action {
  readonly type = GET_POSTS_START;

  constructor(public payload: { id: number }) {}
}

export class GetPosts implements Action {
  readonly type = GET_POSTS;

  constructor(public payload: Post) {}
}

export class LikePostStart implements Action {
  readonly type = LIKE_POST_START;

  constructor(public payload: { id: number }) {}
}

export class LikePost implements Action {
  readonly type = LIKE_POST;

  constructor(public payload: any) {}
}

export type CommonProfilePagePostsActions = GetPosts | GetPostsStart | LikePostStart | LikePost ;
