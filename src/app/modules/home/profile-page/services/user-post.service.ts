import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import * as signalR from'@aspnet/signalr';
import {HubConnection} from '@aspnet/signalr';
import UserAvatar from '../models/user-avatar.model';
import Post from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  private connection : HubConnection;

  constructor(private http: HttpClient){}

  create(post: Post){
    return this.http.post('/api/user-post', post, {observe: 'response'});
  }

  current(){
    return this.http.get(`/api/user-post/current`,
      {observe: 'response'})
  }

  delete(id: number){
    return this.http.delete(`/api/user-post/${id}`,
      {observe: 'response'})
  }

  like(id: number){
    return this.http.put(`/api/user-post/like/${id}`,
      {observe: 'response'})
  }

  unlike(id: number){
    return this.http.put(`/api/user-post/unlike/${id}`,
      {observe: 'response'})
  }
}
