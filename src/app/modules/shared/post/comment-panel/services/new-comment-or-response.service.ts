import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import NewCommentModel from '../models/new-comment.model';
import {NewCommentResponseModel} from '../models/new-comment-response.model';
import NewResponseToResponseModel from '../models/new-response-to-response.model';
import {CommentType} from '../../comment-type.enum';

@Injectable()
export class NewCommentOrResponseService {
  /*private _responseTarget : BehaviorSubject<{responseToComment: boolean,
    responseToResponse: boolean,
    target: {mainCommentId: number,
      responseId?: number}}> = new BehaviorSubject(null);

  public get responseTarget(){
    return this._responseTarget.getValue();
  }

  public set responseTarget(value:{responseToComment: boolean,
    responseToResponse: boolean,
    target: {mainCommentId: number,
      responseId?: number}}){
    this._responseTarget.next(value);
  }*/
  private _commentType : BehaviorSubject<CommentType>
    = new BehaviorSubject(CommentType.PostComment);
  private _initData : BehaviorSubject<{postId: number}
  | {postId: number, commentId: number}
  | {postId: number, commentId: number, responseToCommentId: number}> = new BehaviorSubject(null);

  public get commentType(){
    return this._commentType.getValue();
  }

  public set commentType(value:CommentType){
    this._commentType.next(value);
  }

  public set initData(value: {postId: number}
    | {postId: number, commentId: number}
    | {postId: number, commentId: number, responseToCommentId: number}){
    this._initData.next(value);
  }

  public get commentToPostInitData():{postId: number}{
    return this._initData.getValue();
  }

  public get responseToCommentInitData():{postId: number, commentId: number}{
    return this._initData.getValue() as {postId: number, commentId: number}
  }

  public get responseToResponseInitData():{postId: number,
    commentId: number,
    responseToCommentId: number}{
    return this._initData.getValue() as {postId: number,
      commentId: number,
      responseToCommentId: number}
  }

  /*public get initData():{postId: number}
    | {postId: number, commentId: number}
    | {postId: number, commentId: number, responseToCommentId: number} {
    return this._initData.getValue()
  };*/
}
