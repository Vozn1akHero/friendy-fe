import {Action} from '@ngrx/store';
import CommentModel from '../../models/comment.model';
import NewCommentModel from '../../models/new-comment.model';

export const GET_POST_COMMENTS = '[Post Comment] Get All';
export const SET_POST_COMMENTS = '[Post Comment] Set';
export const REMOVE_BY_ID = '[Post Comment] Remove By Id';
export const CREATE = '[Post Comment] Create';
export const FINALIZE_CREATION = '[Post Comment] Finalize Creation';
export const LIKE = '[Post Comment] Like';
export const LIKE_IN_STATE = '[Post Comment] Like In State';
export const UNLIKE = '[Post Comment] Unlike';
export const UNLIKE_IN_STATE = '[Post Comment] Unlike In State';

export class GetPostComments implements Action {
  readonly type = GET_POST_COMMENTS;

  constructor(public payload: {postId: number}) {}
}

export class SetPostComments implements Action {
  readonly type = SET_POST_COMMENTS;

  constructor(public payload: {[id:string]:CommentModel[]}) {}
}

export class RemoveById implements Action {
  readonly type = REMOVE_BY_ID;

  constructor(public payload: {id: number, postId: number}) {}
}

export class Create implements Action{
  readonly type = CREATE;

  constructor(public payload: NewCommentModel){}
}

export class FinalizeCreation implements Action{
  readonly type = FINALIZE_CREATION;

  constructor(public payload: CommentModel){}
}

export class Like implements Action {
  readonly type = LIKE;

  constructor(public payload: { postId: number,
    commentId: number } ) {}
}

export class LikeInState implements Action {
  readonly type = LIKE_IN_STATE;

  constructor(public payload: { postId: number,
    commentId: number }) {}
}

export class Unlike implements Action {
  readonly type = UNLIKE;

  constructor(public payload: { postId: number,
    commentId: number } ) {}
}

export class UnlikeInState implements Action {
  readonly type = UNLIKE_IN_STATE;

  constructor(public payload: { postId: number,
    commentId: number }) {}
}


export type PostCommentActions = GetPostComments
  | SetPostComments
  | RemoveById
  | Create
  | FinalizeCreation
  | Like | LikeInState | Unlike | UnlikeInState;
