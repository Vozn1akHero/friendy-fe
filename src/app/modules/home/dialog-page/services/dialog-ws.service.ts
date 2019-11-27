import {Injectable} from '@angular/core';
import {HubConnection} from '@aspnet/signalr';
import {HttpClient} from '@angular/common/http';
import NewMessageInChat from '../models/new-message-in-chat.model';
import * as signalR from'@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class DialogWsService {
  private connection: HubConnection;

  connectToChatHub(){
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/dialogHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this.connection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  constructor(private http: HttpClient){
    this.connectToChatHub();
    this.listenToNewMessage();
  }

  listenToNewMessage(){
    this.connection.on('SendMessageToUser', (message) => {
      const received = `message: ${message}`;
      console.log(received);
    });
  }

  sendNewMessage(groupName: string, message: NewMessageInChat){
    this.connection.invoke('SendMessageToUser', message).then(res => {
      console.log(res);
    })
  }

  joinChat(groupName: string){
    this.connection.invoke('JoinGroup', groupName).then(res=>{
      console.log(res)
    })
  }
}
