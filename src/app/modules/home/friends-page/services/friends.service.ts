import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  constructor(private http: HttpClient){}

  filterFriends(keyword : string){
    return this.http.get(`/api/friend/filterFriends/?keyword=${keyword}`,
      {observe: 'response'})
  }

  getFriendsRange(firstIndex : number, lastIndex: number){
    return this.http.get(`/api/friend/sample/indexed/?firstIndex=${firstIndex}&lastIndex=${lastIndex}`,
      {observe: 'response'})
  }

  getUsersByCriteria(criteria){
    return this.http.post('/api/user/getUsersByCriteria', criteria, { observe: 'response' })
  }
}
