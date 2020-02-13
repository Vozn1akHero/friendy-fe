import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {endWith, finalize, map, mergeMap, switchMap, take} from 'rxjs/operators';
import CommentModel from '../models/comment.model';
import NewCommentModel from '../models/new-comment.model';

@Injectable({providedIn: 'root'})
export default class PostCommentService {
  constructor(private http: HttpClient) {
  }

  getRange(postId: number) {
    return this.http.get(`api/post-comment/all/${postId}`,
      {observe: 'body'})
      .pipe(map((res: any) => {
        let comments: CommentModel[] = [];
        res.map(value => {
          comments.push(this.convertToModelByResBody(value))});
        return comments;
      }));
  }

  like(id: number){
    return this.http.post(`api/post-comment/like/${id}`,
      {},
      {observe: 'body'})
      .pipe(map((res: any) => {
        console.log(res)
        return res;
      }));
  }

  unlike(id: number){
    return this.http.delete(`api/post-comment/unlike/${id}`, {observe: 'body'})
      .pipe(map((res: any) => {
        return res;
      }));
  }

  delete(id: number){
    return this.http.delete(`api/post-comment/${id}`, {observe: 'body'})
      .pipe(map((res: any) => {
        return res;
      }));
  }

  create(comment: NewCommentModel){
    return this.http.post(`api/post-comment`, comment, {observe: 'body'})
      .pipe(map((res: any) => {
        return this.convertToModelByResBody(res);
      }));
  }

  private convertToModelByResBody(res:any){
    return new CommentModel(res.id,
      res.authorId,
      res.authorName,
      res.authorSurname,
      res.authorAvatarPath,
      res.content,
      res.likesCount,
      res.commentsCount,
      res.postId,
      res.isCommentLikedByUser,
      res.date);
  }
}
