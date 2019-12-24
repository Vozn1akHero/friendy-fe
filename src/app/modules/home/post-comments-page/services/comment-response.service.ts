import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {endWith, finalize, map, mergeMap, switchMap, take} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import CommentResponseModel from '../models/comment-response.model';

@Injectable({
  providedIn: 'root'
})
export default class CommentResponseService {
  constructor(private http: HttpClient) {
  }

  get commentResponses$(): Observable<CommentResponseModel[]> {
    return this._commentResponses.asObservable();
  }

  get commentResponsesLoading$(): Observable<boolean> {
    return this._commentResponsesLoading.asObservable();
  }

  private _commentResponsesLoading = new BehaviorSubject(false);

  set commentResponsesLoading(value: boolean) {
    this._commentResponsesLoading.next(value);
  }

  private readonly _startState : CommentResponseModel[] = [];
  private _commentResponses = new BehaviorSubject(this._startState);

  set commentResponses(value: CommentResponseModel[]) {
    this._commentResponses.next(value);
  }

  getAllByCommentId(commentId: number){
    return this.http.get(`api/post-comment/response/all/${commentId}`,
      {observe: 'body'})
      .pipe(map((res: any[]) => {
        this.commentResponsesLoading = true;
        let comments: CommentResponseModel[] = [];
        res.map(value => {
          comments.push(new CommentResponseModel(value.id,
            value.authorId,
            value.authorName,
            value.authorSurname,
            value.authorAvatarPath,
            value.content,
            value.likesCount,
            value.postId,
            value.commentAuthorName,
            value.commentAuthorSurname,
            value.commentId,
            value.isCommentLikedByUser,
            value.date));
        });
        this.commentResponsesLoading = false;
        this.commentResponses = comments;
      }));
  }


}
