import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {endWith, finalize, map, mergeMap, switchMap, take} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import CommentResponseModel from '../models/comment-response.model';
import NewCommentModel from '../models/new-comment.model';
import {NewCommentResponseModel} from '../models/new-comment-response.model';
import NewResponseToResponseModel from '../models/new-response-to-response.model';

@Injectable({providedIn: 'root'})
export default class CommentResponseService {
  constructor(private http: HttpClient) {
  }

  getAllByCommentId(commentId: number){
    return this.http.get(`api/comment-response/all/${commentId}`,
      {observe: 'body'})
      .pipe(map((res: any) => {
        //this.commentResponsesLoading = true;
        let comments: CommentResponseModel[] = [];
        res.map(value => {
          comments.push(this.convertToCommentResponseByResBody(value));
        });
        return comments;
      }));
  }

  like(id: number){
    return this.http.post(`api/comment-response/like/${id}`, {}, {observe: 'body'})
    .pipe(map((res: any) => {
        return res;
      }));
  }

  unlike(id: number){
    return this.http.delete(`api/comment-response/unlike/${id}`, {observe: 'body'})
    .pipe(map((res: any) => {
        return res;
      }));
  }

  delete(id: number){
    return this.http.delete(`api/comment-response/${id}`, {observe: 'body'})
    .pipe(map((res: any) => {
        return res;
      }));
  }

  create(commentResponse: NewCommentResponseModel){
    return this.http.post(`api/comment-response`, commentResponse, {observe: 'body'})
      .pipe(map((res: any) => {
        return this.convertToCommentResponseByResBody(res);
      }));
  }

  createResponseToResponse(responseToResponse: NewResponseToResponseModel){
    return this.http.post(`api/comment-response/to-response`, responseToResponse,{observe: 'body'})
      .pipe(map((res: any) => {
        return this.convertToCommentResponseByResBody(res);
      }));
  }

  private convertToCommentResponseByResBody(res: any){
    return new CommentResponseModel(res.id,
      res.authorId,
      res.authorName,
      res.authorSurname,
      res.authorAvatarPath,
      res.content,
      res.likesCount,
      res.postId,
      res.commentAuthorName,
      res.commentAuthorSurname,
      res.commentId,
      res.isCommentLikedByUser,
      res.date,
      res.responseToCommentId);
  }
}
