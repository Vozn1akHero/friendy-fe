import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import ChatFriendBasicData from "../models/interlocutor-data.model";
import MessageInChat from "../models/message-in-chat.model";
import NewMessageInChat from "../models/new-message-in-chat.model";
import ChatData from "../models/chat-data.model";
import { SessionModel } from "../../../../shared/models/session.model";
import InterlocutorDataModel from "../models/interlocutor-data.model";

@Injectable({
  providedIn: "root"
})
export class DialogService {
  constructor(private http: HttpClient) {}

  getMessagesInDialog(
    to: number,
    page: number,
    length: number
  ): Observable<MessageInChat[]> {
    return this.http.get(`/api/chat/${to}/page/${page}?length=${length}`).pipe(
      map((res: any[]) => {
        return [
          ...res.map(
            value =>
              new MessageInChat(
                value.content,
                value.imagePath,
                value.userId,
                value.date
              )
          )
        ];
      })
    );
  }

  getChatData(receiverId: number): Observable<ChatData> {
    return this.http.get(`api/chat/data-by-interlocutors/${receiverId}`).pipe(
      map((res: any) => {
        const first = res.firstInterlocutor;
        const second = res.secondInterlocutor;
        return new ChatData(
          res.id,
          new InterlocutorDataModel(
            first.id,
            first.name,
            first.surname,
            first.avatar,
            first.city,
            first.birthday,
            first.session
          ),
          new InterlocutorDataModel(
            second.id,
            second.name,
            second.surname,
            second.avatar,
            second.city,
            second.birthday,
            second.session
          )
        );
      }),
      catchError(() => {
        return of(null);
      })
    );
  }

  getChatFriendData(receiverId: number): Observable<ChatFriendBasicData> {
    return this.http.get(`/api/user/${receiverId}/extended`).pipe(
      map((res: any) => {
        const session = new SessionModel(
          res.session.id,
          res.session.connectionStart ? res.session.connectionStart : null,
          res.session.connectionEnd ? res.session.connectionEnd : null
        );
        return new ChatFriendBasicData(
          res.id,
          res.name,
          res.surname,
          res.avatar,
          res.city,
          res.birthday,
          session
        );
      })
    );
  }

  addNewMessage(
    chatId: number,
    interlocutorId: number,
    chatMessage: NewMessageInChat
  ) {
    let formData = new FormData();
    formData.append("text", chatMessage.content);
    formData.append("image", chatMessage.image);
    return this.http
      .post(`/api/chat/message/${chatId}/${interlocutorId}`, formData)
      .pipe(
        map((res: MessageInChat) => {
          return res;
        })
      );
  }
}
