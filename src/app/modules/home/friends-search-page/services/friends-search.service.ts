import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import UserSearchModelDto from '../models/user-search-dto.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsSearchService {
  constructor(private http: HttpClient){}

  getUsersByCriteria(criteria : UserSearchModelDto){
    return this.http.post('/api/user/with-criteria', criteria, { observe: 'response' })
  }
}
