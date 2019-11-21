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
    return this.http.get(`api/friend/requests/sent`, {observe: 'body'})
      .pipe(map((response : any[]) => {
        if(Object.keys(response).length === 0){
          return [];
        }
        let sentFriendRequests: SentFriendRequestModel[] = [];
        response.map((value : any) => {
          const sentFriendRequest = new SentFriendRequestModel(value.receiverId,
            value.name,
            value.surname,
            value.avatarPath,
            value.requestId);
          sentFriendRequests.push(sentFriendRequest);
        });

        return sentFriendRequests;
      }))
  }

  getReceivedFriendRequests(){
    return this.http.get(`api/friend/requests/received`, {observe: 'body'})
      .pipe(map((response : any[]) => {
        if(response.length === 0){
          return [];
        }
        let receivedFriendRequests: ReceivedFriendRequestModel[] = [];
        response.map((value : any) => {
          const receivedFriendRequest = new ReceivedFriendRequestModel(value.authorId,
            value.name,
            value.surname,
            value.avatarPath,
            value.requestId);
          receivedFriendRequests.push(receivedFriendRequest);
        });
        return receivedFriendRequests;
      }));
  }
}
