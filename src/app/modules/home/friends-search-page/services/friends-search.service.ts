import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import UserSearchModelDto from '../models/user-search-dto.model';
import {map} from 'rxjs/operators';
import FoundUserModel from '../models/found-user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsSearchService {
  constructor(private http: HttpClient) {
  }

  getUsersByCriteria(criteria: UserSearchModelDto) {
    return this.http.post('/api/user-search/with-criteria', criteria, {observe: 'response'})
  }

  getExemplaryUsers(firstIndex: number, lastIndex: number): Observable<FoundUserModel[]> {
    return this.http.get(`/api/friend/recommended/?firstIndex=${firstIndex}&lastIndex=${lastIndex}`)
      .pipe(map(response => {
        return response as FoundUserModel[];
      }))
  }

  checkIfFriendByUserId(userId : number){
    return this.http.get(`api/friend/friendship-status/?id=${userId}`,
      {observe: 'response'})
  }
}
