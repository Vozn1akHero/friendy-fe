import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import ChatFriendBasicData from '../models/interlocutor-data.model';
import MessageInChat from '../models/message-in-chat.model';
import NewMessageInChat from '../models/new-message-in-chat.model';
import ChatData from '../models/chat-data.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private http: HttpClient){}

  getMessagesInDialog(to: number, startIndex: number, length: number) : Observable<MessageInChat[]>{
    return this.http.get(`/api/chat/${to}?startIndex=${startIndex}&length=${length}`)
      .pipe(
        map((response : any[]) => {
          let arr : MessageInChat[] = [];
          response.map(value => {
            arr.push(new MessageInChat(value.content, value.imagePath, value.userId, value.date))
          });
          return arr;
        }))
  }

  getChatData(receiverId: number) : Observable<ChatData>{
    return this.http.get(`api/chat/data-by-interlocutors/${receiverId}`)
      .pipe(
        map((res : any) => {
          return new ChatData(res.id, res.firstParticipantId, res.secondParticipantId);
        }))
  }

  getChatFriendData(receiverId: number) : Observable<ChatFriendBasicData>{
    return this.http.get(`/api/user/${receiverId}/with-selected-fields?selectedFields=Id,Name,Surname,Avatar`)
      .pipe(
        map((res : any) => {
          return new ChatFriendBasicData(res.name,
            res.surname,
            res.id,
            res.avatar);
      }))
  }

  addNewMessage(chatId: number, interlocutorId: number, chatMessage: NewMessageInChat){
    return this.http.post(`/api/chat/message/${chatId}/${interlocutorId}`,
      chatMessage
    ).pipe(
      map((response : MessageInChat) => {
        return response;
      }))
  }
}
