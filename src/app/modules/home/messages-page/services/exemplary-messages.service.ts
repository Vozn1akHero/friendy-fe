import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HubConnection} from '@aspnet/signalr';
import {map} from 'rxjs/operators';
import ExemplaryMessage from '../models/exemplary-message.model';

@Injectable({
  providedIn: 'root'
})
export class ExemplaryMessagesService {
  constructor(private http: HttpClient){}

  getExemplaryMessages(page: number){
    return this.http.get(`/api/chat/last-messages/paginate?page=${page}`,
      {observe: 'body'}).pipe(map((response : any[]) => {
          let messages : ExemplaryMessage[] = [];
          response.map((res : any) => {
            const newExemplaryMessage = new ExemplaryMessage(res.content,
              res.senderId,
              res.senderAvatarPath,
              res.date,
              res.imageUrl != null,
              res.interlocutorId,
              res.interlocutorAvatarPath,
              res.writtenByRequestIssuer);
            messages.push(newExemplaryMessage);
          });
          return messages;
    }))
  }
}
