import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import ChatFriendBasicData from '../models/interlocutor-data.model';
import MessageInChat from '../models/message-in-chat.model';
import NewMessageInChat from '../models/new-message-in-chat.model';
import ChatData from '../models/chat-data.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private http: HttpClient){}

  getMessagesInDialog(to: number, page: number) : Observable<MessageInChat[]>{
    return this.http.get(`/api/chat/${to}/page/${page}`)
      .pipe(
        map((res : any[]) => {
          let arr : MessageInChat[] = [];
          res.map(value => {
            arr.push(new MessageInChat(value.content, value.imagePath, value.userId, value.date))
          });
          return arr;
        }))
  }

  getChatData(receiverId: number) : Observable<ChatData>{
    return this.http.get(`api/chat/data-by-interlocutors/${receiverId}`)
      .pipe(
        map((res : any) => {
          console.log(res);
          return new ChatData(res.id,
            res.firstInterlocutor.id,
            res.secondInterlocutor.id);
        }))
  }

  getChatFriendData(receiverId: number) : Observable<ChatFriendBasicData>{
    return this.http.get(`/api/user/${receiverId}/extended`)
      .pipe(
        map((res : any) => {
          return new ChatFriendBasicData(res.id,
            res.name,
            res.surname,
            res.avatar,
            res.city,
            res.birthday,
            res.session);
      }))
  }

  addNewMessage(chatId: number, interlocutorId: number, chatMessage: NewMessageInChat){
    return this.http.post(`/api/chat/message/${chatId}/${interlocutorId}`,
      chatMessage
    ).pipe(
      map((res : MessageInChat) => {
        return res;
      }))
  }
}
