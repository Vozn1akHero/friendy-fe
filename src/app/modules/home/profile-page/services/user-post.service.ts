import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import * as signalR from'@aspnet/signalr';
import {HubConnection} from '@aspnet/signalr';
import UserAvatar from '../models/user-avatar.model';
import Post from '../models/post.model';
import NewPost from '../models/new-post.model';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  private connection : HubConnection;

  constructor(private http: HttpClient){}

  create(post: NewPost){
    const content = new FormData();
    content.append("image", post.image);
    content.append("content", post.content);

    return this.http.post('/api/user-post', content, {observe: 'response'});
  }

  current(startIndex: number){
    return this.http.get(`/api/user-post/current?startIndex=${startIndex}&length=10`,
      {observe: 'response'})
  }

  getByUserId(id: number, startIndex: number){
    return this.http.get(`/api/user-post?userId=${id}&startIndex=${startIndex}&length=10`,
      {observe: 'response'})
  }

  delete(id: number){
    return this.http.delete(`/api/user-post/${id}`,
      {observe: 'response'})
  }

  like(id: number){
    return this.http.put(`/api/post/like/${id}`,
      {observe: 'response'})
  }

  unlike(id: number){
    return this.http.put(`/api/post/unlike/${id}`,
      {observe: 'response'})
  }
}
