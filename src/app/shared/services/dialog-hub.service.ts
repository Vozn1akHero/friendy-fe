import {Injectable} from '@angular/core';
import {HubConnection} from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import ExemplaryMessage from '../../modules/home/messages-page/models/exemplary-message.model';
import {HttpClient} from '@angular/common/http';
import {UserIdService} from './user-id.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../core/ngrx/store/app.reducer';
import * as DialogActions from '../../modules/home/dialog-page/store/dialog-messages/dialog-messages.actions';
import * as ExemplaryMessagesActions from '../../modules/home/messages-page/store/exemplary-messages/exemplary-messages.actions';
import MessageInChatModel from '../../modules/home/dialog-page/models/message-in-chat.model';
import NewMessageInChat from '../../modules/home/dialog-page/models/new-message-in-chat.model';
import {take} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DialogHubService {
  private _connected = new BehaviorSubject(false);

  private set connected(value : boolean) {
    this._connected.next(value);
  }

  public get connected$(){
    return this._connected.asObservable();
  }

  private dialogHubConnection: HubConnection;
  constructor(private http: HttpClient,
              private userIdService: UserIdService,
              private store: Store<fromApp.AppState>) {
    this.connectToDialogHub();
  }
  private connectToDialogHub() {
    this.dialogHubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/dialogHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this.dialogHubConnection
      .start()
      .then(() => {
        this.connected = true;
        console.log('Connection to dialogHub started');
      })
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  listenToNewLastMessage(){
    this.dialogHubConnection.on('SendExpandedMessageToUser', (message : any) => {
      this.store.select(e => e.messagesPageExemplaryMessages.exemplaryMessages)
        .pipe(take(1))
        .subscribe(exemplaryMessages => {
        const newEM : ExemplaryMessage[] = exemplaryMessages;
        exemplaryMessages.map((value, index) => {
          if(value.interlocutorId == message.interlocutorId){
            newEM.splice(index, 1);
            newEM.push(message);
          }
        });
        this.store.dispatch(new ExemplaryMessagesActions.SetExemplaryMessages(newEM))
      })
    });
  }

  listenToNewMessage(){
    this.dialogHubConnection.on('SendMessageToUser', (message : any) => {
      if(message.userId !== this.userIdService.userIdValue){
        this.store.dispatch(new DialogActions.SetAddedMessage(new MessageInChatModel(
          message.content,
          message.imagePath,
          message.userId,
          message.date
        )))
      }
    });
  }

  joinGroup(groupName: string){
    this.dialogHubConnection.invoke('JoinGroup', groupName).then(() => {});
  }

  sendNewMessage(groupName: string, message: NewMessageInChat){
    this.dialogHubConnection.invoke('SendMessageToUser', message).then(res => {
      console.log(res);
    })
  }
}
