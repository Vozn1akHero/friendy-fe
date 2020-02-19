import {Action} from '@ngrx/store';
import CommentResponseModel from '../../models/comment-response.model';
import NewResponseToResponseModel from '../../models/new-response-to-response.model';
import {NewCommentResponseModel} from '../../models/new-comment-response.model';

export const GET_COMMENTS_RESPONSES = '[Post Comment Response] Get All';
export const SET_COMMENTS_RESPONSES = '[Post Comment Response] Set';
export const REMOVE_BY_ID = '[Post Comment Response] Remove By Id';
export const CREATE = '[Post Comment Response] Create';
export const FINALIZE_CREATION = '[Post Comment Response] Finalize Creation';
export const CREATE_RESPONSE_TO_RESPONSE = '[Post Comment Response] Create Response To Response';
export const FINALIZE_CREATION_RESPONSE_TO_RESPONSE = '[Post Comment Response] Finalize Creation Response To Response';
export const LIKE = '[Post Comment Response] Like';
export const LIKE_IN_STATE = '[Post Comment Response] Like In State';
export const UNLIKE = '[Post Comment Response] Unlike';
export const UNLIKE_IN_STATE = '[Post Comment Response] Unlike In State';

export class GetCommentResponses implements Action {
  readonly type = GET_COMMENTS_RESPONSES;

  constructor(public payload: {commentId: number}) {}
}

export class SetCommentResponses implements Action {
  readonly type = SET_COMMENTS_RESPONSES;

  constructor(public payload: {[commentId: string]: CommentResponseModel[]}) {}
}

export class RemoveById implements Action {
  readonly type = REMOVE_BY_ID;

  constructor(public payload: {id: number}) {}
}

export class Create implements Action{
  readonly type = CREATE;

  constructor(public payload: NewCommentResponseModel){}
}

export class FinalizeCreation implements Action{
  readonly type = FINALIZE_CREATION;

  constructor(public payload: CommentResponseModel){}
}

export class CreateResponseToResponse implements Action{
  readonly type = CREATE_RESPONSE_TO_RESPONSE;

  constructor(public payload: NewResponseToResponseModel){}
}

export class FinalizeCreationResponseToResponse implements Action{
  readonly type = FINALIZE_CREATION_RESPONSE_TO_RESPONSE;

  constructor(public payload: CommentResponseModel){}
}

export class Like implements Action {
  readonly type = LIKE;

  constructor(public payload: { id: number, parentCommentId: number } ) {}
}

export class LikeInState implements Action {
  readonly type = LIKE_IN_STATE;

  constructor(public payload: { id: number, parentCommentId: number }) {}
}

export class Unlike implements Action {
  readonly type = UNLIKE;

  constructor(public payload: { id: number, parentCommentId: number } ) {}
}

export class UnlikeInState implements Action {
  readonly type = UNLIKE_IN_STATE;

  constructor(public payload: { id: number, parentCommentId: number }) {}
}

export type CommentResponseActions = GetCommentResponses |
  SetCommentResponses |
  RemoveById |
  Create |
  FinalizeCreation |
  CreateResponseToResponse |
  FinalizeCreationResponseToResponse |
  Like | LikeInState | Unlike | UnlikeInState;
