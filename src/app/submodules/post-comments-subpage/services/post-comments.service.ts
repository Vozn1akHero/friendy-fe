import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {endWith, finalize, map, mergeMap, switchMap, take} from 'rxjs/operators';
import CommentModel from '../models/comment.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class PostCommentsService {
/*  get comments$(): Observable<CommentModel[]> {
    return this._comments.asObservable();
  }

  set comments(value: CommentModel[]) {
    this._comments.next(value);
  }*/

  get commentsLoaded$(): Observable<boolean> {
    return this._commentsLoaded.asObservable();
  }

  set commentsLoaded(value: boolean) {
    this._commentsLoaded.next(value);
  }

  private _commentsLoaded = new BehaviorSubject(false);
  //private _comments = new BehaviorSubject([]);

  constructor(private http:HttpClient){}

  getRange(postId: number, startIndex: number, length: number) : Observable<CommentModel[]>{
    return this.http.get(`api/post-comment/range/${postId}?startIndex=${startIndex}&length=${length}`,
      { observe: 'body'})
      .pipe(map((res:any[]) => {
        let comments : CommentModel[] = [];
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
            value.date))
        });
        this.commentsLoaded = true;
        return comments;
      }))
  }
}
