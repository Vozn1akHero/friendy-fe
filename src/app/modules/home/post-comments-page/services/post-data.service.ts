import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import UserPostModel from '../models/user-post.model';
import EventPostModel from '../models/event-post.model';

@Injectable({
  providedIn: 'root'
})
export default class PostDataService {
  constructor(private http:HttpClient){}

  getUserPostData(postId: number){
    return this.http.get(`api/user-post/${postId}`,
      { observe: 'response' })
      .pipe(map((res: HttpResponse<any>) => {
      return new UserPostModel(res.body.id,
        res.body.userId,
        res.body.content,
        res.body.imagePath,
        res.body.likesCount,
        res.body.commentsCount,
        res.body.postId,
        res.body.isPostLikedByUser,
        res.body.avatar,
        res.body.date);
    }))
  }

  getEventPostData(postId: number){
    return this.http.get(`api/event-post/${postId}`,
      { observe: 'response' })
      .pipe(map((res: HttpResponse<any>) => {
        return new EventPostModel(res.body.id,
          res.body.eventId,
          res.body.content,
          res.body.imagePath,
          res.body.likesCount,
          res.body.commentsCount,
          res.body.postId,
          res.body.isPostLikedByUser,
          res.body.avatar,
          res.body.date);
      }))
  }
}
