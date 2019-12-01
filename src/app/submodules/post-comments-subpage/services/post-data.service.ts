import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import UserPostModel from '../models/user-post.model';
import EventPostModel from '../models/event-post.model';

@Injectable({
  providedIn: 'root'
})
export default class PostDataService {
  constructor(private http:HttpClient){}

  getUserPostData(postId: number) : Observable<UserPostModel>{
    return this.http.get(`api/user-post/${postId}`, { observe: 'body' })
      .pipe(map((res:UserPostModel) => {
        return res;
      }))
  }

  getEventPostData(postId: number) : Observable<EventPostModel>{
    return this.http.get(`api/event-post/${postId}`, { observe: 'body' })
      .pipe(map((res:EventPostModel) => {
        return res;
      }))
  }
}
