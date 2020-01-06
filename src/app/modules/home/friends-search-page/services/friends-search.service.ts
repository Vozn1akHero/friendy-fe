import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
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

  getUsersByCriteriaRA(criteria: UserSearchModelDto) {
    return this.http.post('/api/user-search/with-criteria', criteria, {observe: 'response'})
      .pipe(map((res : HttpResponse<any[]>) => {
        let userList = [];
        res.body.map(user => {
          userList.push(new FoundUserModel(user.id,
            user.name,
            user.surname,
            user.avatar,
            user.city))
        });
        return userList;
    }))
  }

  getUsersByCriteria(criteria: UserSearchModelDto) {
    const body = {
      "query" : {
        "bool": {
          "must": [
            {
              "match_phrase": {
                "name": "Dmytro"
              }
            },
            {
              "match_phrase": {
                "surname": "Vozniachuk"
              }
            },
            {
              "match_phrase": {
                "city": "Gdańsk"
              }
            },
            {
              "range":{
                "birthday": {
                  "format": "dd.mm.yyyy",
                  "gt": "10.12.1998",
                  "lt": "11.12.2000"
                }
              }
            },
            {
              "match": {
                "userInterests.id": 1
              }
            },
            {
              "match": {
                "userInterests.id": 2
              }
            }
          ]
        }
      }
    };

    return this.http.get('http://localhost:9200/users/_search', {
      params:{
        source: JSON.stringify(body),
        source_content_type: 'application/json'
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      observe: 'response' })
      .pipe(map((res : HttpResponse<any[]>) => {
        console.log(res.body);
        let userList = [];
        res.body.map(user => {
          userList.push(new FoundUserModel(user.id,
            user.name,
            user.surname,
            user.avatar,
            user.city))
        });
        return userList;
      }))
  }

  getExemplaryUsers(firstIndex: number, lastIndex: number): Observable<FoundUserModel[]> {
    return this.http.get(`/api/user-search/exemplary/?firstIndex=${firstIndex}&lastIndex=${lastIndex}`)
      .pipe(map(response => {
        return response as FoundUserModel[];
      }))
  /*return this.http.get(`/api/friend/recommended/?firstIndex=${firstIndex}&lastIndex=${lastIndex}`)
      .pipe(map(response => {
        return response as FoundUserModel[];
      }))
  */}

  checkIfFriendByUserId(userId : number){
    return this.http.get(`api/friend/friendship-status/?id=${userId}`,
      {observe: 'response'})
  }

  getFriendRequestStatus(userId: number){
    return this.http.get(`api/friend/request/status/?receiverId=${userId}`,
      {observe: 'response'})
  }

  sendFriendRequest(id: number){
    return this.http.post(`api/friend/request/${id}`, {observe: 'response'});
  }

  removeFriendRequest(id: number){
    return this.http.delete(`api/friend/request/${id}`, {observe: 'response'});
  }
}
