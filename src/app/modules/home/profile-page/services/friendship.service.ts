import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {
  constructor(private http: HttpClient){}

  checkIfFriendByUserId(userId : number) : Observable<boolean>{
    return this.http.get(`api/friend/friendship-status/?id=${userId}`,
      {observe: 'body'}).pipe(map((value: boolean) => {
      return value;
    }))
  }

  getFriendRequestStatus(userId: number) : Observable<boolean>{
    return this.http.get(`api/friend/request/status/?receiverId=${userId}`,
      {observe: 'body'}).pipe(map((value: boolean) => {
        return value;
    }))
  }

  sendFriendRequest(id: number){
    return this.http.post(`api/friend/request/${id}`, {observe: 'response'});
  }

  removeFriendRequest(id: number){
    return this.http.delete(`api/friend/request/${id}`, {observe: 'response'});
  }
}
