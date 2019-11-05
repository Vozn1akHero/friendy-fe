import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import ReceivedFriendRequestModel from '../models/received-friend-request.model';
import SentFriendRequestModel from '../models/sent-friend-request.model';


@Injectable({
  providedIn: 'root'
})
export class FriendRequestsService {
  constructor(private http: HttpClient){}

  getSentFriendRequests(){
    return this.http.get(`api/friend/requests/sent`, {observe: 'response'})
      .pipe(map(response => {
        if(Array(response.body).length === 0){
          return null;
        }
        let sentFriendRequests: SentFriendRequestModel[] = [];
        Array(response.body).map((value : SentFriendRequestModel) => {
          const sentFriendRequest = new SentFriendRequestModel(value.receiverId,
            value.name,
            value.surname,
            value.requestId);
          sentFriendRequests.push(sentFriendRequest);
        });
        return sentFriendRequests;
      }))
  }

  getReceivedFriendRequests(){
    return this.http.get(`api/friend/requests/received`, {observe: 'response'})
      .pipe(map(response => {
        if(Array(response.body).length === 0){
          return null;
        }
        let receivedFriendRequests: ReceivedFriendRequestModel[] = [];
        Array(response.body).map((value : ReceivedFriendRequestModel) => {
          const receivedFriendRequest = new ReceivedFriendRequestModel(value.authorId,
            value.name,
            value.surname,
            value.requestId);
          receivedFriendRequests.push(receivedFriendRequest);
        });
        return receivedFriendRequests;
      }));
  }
}
