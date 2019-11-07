import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import * as signalR from'@aspnet/signalr';
import {HubConnection} from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {
  private connection : HubConnection;

  constructor(private http: HttpClient){

  }

  connectToSocket() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5000/profileHub", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this.connection.start().then(() => {
      console.log("connected to profile hub")
    })

    this.connection.on("Connected", (data) => {
      console.log(data);
    })
  }
}
