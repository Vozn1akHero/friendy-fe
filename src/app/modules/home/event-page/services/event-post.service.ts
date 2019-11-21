import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import NewPost from '../models/new-post.model';
import EventPost from '../models/event-post.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventPostService {
  constructor(private http: HttpClient){}

  create(post: NewPost, eventId: number){
    const content = new FormData();
    content.append("image", post.image);
    content.append("content", post.content);

    return this.http.post(`/api/event-post/${eventId}`,
      content, {observe: 'response'});
  }

  current(startIndex: number){
    return this.http.get(`/api/event-post/current?startIndex=${startIndex}&length=10`,
      {observe: 'response'})
  }

  getByEventId(id: number, startIndex: number){
    return this.http.get<EventPost[]>(`/api/event-post?eventId=${id}&startIndex=${startIndex}&length=10`)
  }

  delete(id: number){
    return this.http.delete(`/api/post/${id}`,
      {observe: 'response'})
  }

  like(id: number){
    return this.http.put(`/api/post/like/${id}`,
      null, {responseType: 'text'});
  }

  unlike(id: number){
    return this.http.put(`/api/post/unlike/${id}`,
      null, {responseType: 'text'});
  }
}
