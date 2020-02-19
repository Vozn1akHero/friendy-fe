import {Injectable} from '@angular/core';
import * as signalR from '@aspnet/signalr';
import {HubConnection} from '@aspnet/signalr';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {
  private _connected = new BehaviorSubject(false);
  private set connected(value : boolean) {
    this._connected.next(value);
  }
  public get connected$(){
    return this._connected.asObservable();
  }

  private _connectedMethodExecuted = new BehaviorSubject(false);
  private set connectedMethodExecuted(value : boolean) {
    this._connectedMethodExecuted.next(value);
  }
  public get connectedMethodExecuted$(){
    return this._connectedMethodExecuted.asObservable();
  }

  private _userStatusHub: HubConnection;

  private connectToHub() {
    this._userStatusHub = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/userStatusHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this._userStatusHub
      .start()
      .then(() => {
        this.connected = true;
      })
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  constructor(){
    this.connectToHub();
  }

  setConnectedState(userId: number){
    this._userStatusHub.invoke("ConnectUser", userId)
      .then(res => {
        this.connectedMethodExecuted = true;
      })
  }
}
