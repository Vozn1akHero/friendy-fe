import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import * as signalR from'@aspnet/signalr';
import {HubConnection} from '@aspnet/signalr';
import {UserIdService} from '../../../../shared/services/user-id.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {
  private connection : HubConnection;

  constructor(private http: HttpClient, private userIdService: UserIdService){}

  /*connectToSocket() {
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
  }*/

  getProfileBelongingStatus(id: number){
    //return id === this.userIdService.userIdValue;
    return this.http.get(`api/user/profile-belonging/${id}`, {observe: 'response'})
      .pipe(
        map(res => {
          return res.body as boolean;
        })
      )
  }
}
