import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExemplaryFriendsService {
  constructor(private http: HttpClient){}

  getByUserId(id : number, page: number){
    return this.http.get(`/api/friend/paginate/${id}?page=${page}`,
      {observe: 'body'});
  }
}
