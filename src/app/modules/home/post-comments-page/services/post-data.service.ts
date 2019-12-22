import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class PostDataService {
  constructor(private http:HttpClient){}

  getUserPostData(postId: number){
    return this.http.get(`api/user-post/${postId}`, { observe: 'response' })
  }

  getEventPostData(postId: number){
    return this.http.get(`api/event-post/${postId}`, { observe: 'response' })
  }
}
