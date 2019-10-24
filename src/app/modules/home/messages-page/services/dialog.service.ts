import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import * as signalR from'@aspnet/signalr';
import {HubConnection} from '@aspnet/signalr';
import ChatFriendBasicData from '../models/chat-friend-basic-data.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private connection : HubConnection;

  constructor(private http: HttpClient){

  }

  getMessagesInDialog(chatHash: string){
    return this.http.get(`/api/chat/messages/${chatHash}`, {observe: 'response'});
  }

  getChatFriendData(chatHash: string) : Observable<ChatFriendBasicData>{
    return this.http.get(`/api/chat/participants/friend-basic-data/${chatHash}`)
      .pipe(
        map((res : ChatFriendBasicData) => {
          const chatFriendData : ChatFriendBasicData = res;
          return new ChatFriendBasicData(chatFriendData.name,
            chatFriendData.surname,
            chatFriendData.friendId,
            chatFriendData.avatar);
      }))
  }
}
