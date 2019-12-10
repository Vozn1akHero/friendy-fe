import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient){}

  like(id: number){
    return this.http.put(`/api/post/like/${id}`,
      null, {responseType: 'text'});
  }

  unlike(id: number){
    return this.http.put(`/api/post/unlike/${id}`,
      null, {responseType: 'text'});
  }
}
