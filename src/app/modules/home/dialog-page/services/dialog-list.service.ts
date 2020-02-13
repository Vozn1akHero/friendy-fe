import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HubConnection} from '@aspnet/signalr';
import {map} from 'rxjs/operators';
import DialogModel from '../models/dialog.model';

@Injectable({
  providedIn: 'root'
})
export class DialogListService {
  constructor(private http: HttpClient){}

  getByPage(page: number){
    return this.http.get(`/api/chat/last-messages/paginate?page=${page}`,
      {observe: 'body'}).pipe(map((response : any[]) => {
          let messages : DialogModel[] = [];
          console.log(response)
          response.map((res : any) => {
            const chat = new DialogModel(res.content,
              res.senderId,
              res.senderAvatarPath,
              res.date,
              res.imageUrl != null,
              res.interlocutor.id,
              res.interlocutor.avatarPath,
              res.interlocutor.name,
              res.interlocutor.surname,
              res.writtenByRequestIssuer);
            messages.push(chat);
          });
          return messages;
    }))
  }
}
