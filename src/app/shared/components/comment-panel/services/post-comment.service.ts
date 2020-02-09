import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {endWith, finalize, map, mergeMap, switchMap, take} from 'rxjs/operators';
import CommentModel from '../models/comment.model';
import {BehaviorSubject, Observable} from 'rxjs';
import NewCommentModel from '../models/new-comment.model';

@Injectable()
export default class PostCommentService {
  constructor(private http: HttpClient) {
  }

  get comments$(): Observable<CommentModel[]> {
    return this._comments.asObservable();
  }

  get commentsLoaded$(): Observable<boolean> {
    return this._commentsLoaded.asObservable();
  }

  private _commentsLoaded = new BehaviorSubject(false);

  set commentsLoaded(value: boolean) {
    this._commentsLoaded.next(value);
  }

  private _comments = new BehaviorSubject([]);

  set comments(value: CommentModel[]) {
    this._comments.next(value);
  }

  getRange(postId: number) {
    return this.http.get(`api/post-comment/all/${postId}`,
      {observe: 'body'})
      .pipe(map((res: any[]) => {
        let comments: CommentModel[] = [];
        res.map(value => {
          comments.push(new CommentModel(value.id,
            value.authorId,
            value.authorName,
            value.authorSurname,
            value.authorAvatarPath,
            value.content,
            value.likesCount,
            value.commentsCount,
            value.postId,
            value.isCommentLikedByUser,
            value.date));
        });
        this.commentsLoaded = true;
        this.comments = comments;
      }));
  }

  addNew(comment: NewCommentModel) {
    return this.http.post(`api/post-comment`, comment, {observe: 'response'})
      .pipe(map((res: HttpResponse<any>) => {
      this.comments = [new CommentModel(res.body.id,
        res.body.authorId,
        res.body.authorName,
        res.body.authorSurname,
        res.body.authorAvatarPath,
        res.body.content,
        res.body.likesCount,
        res.body.commentsCount,
        res.body.postId,
        res.body.isCommentLikedByUser,
        res.body.date), ...this._comments.getValue()]
    }));
  }
}
