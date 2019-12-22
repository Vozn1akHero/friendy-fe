import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {
  constructor(private http: HttpClient){}

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
