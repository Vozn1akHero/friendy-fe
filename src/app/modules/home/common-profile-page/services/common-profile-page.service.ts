import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import * as signalR from'@aspnet/signalr';
import {HubConnection} from '@aspnet/signalr';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CommonProfilePageService {
  private connection : HubConnection;

  constructor(private http: HttpClient){

  }

  getUser(id) : Observable<any> {
    return this.http.get(`/api/user/getById/${id}`, {observe: 'response'})
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
