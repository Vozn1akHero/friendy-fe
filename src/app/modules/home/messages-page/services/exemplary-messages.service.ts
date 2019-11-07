import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import * as signalR from'@aspnet/signalr';
import {HubConnection} from '@aspnet/signalr';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ExemplaryMessagesService {
  private connection : HubConnection;

  constructor(private http: HttpClient){

  }

  getExemplaryMessages(){
    return this.http.get('/api/chat/last-messages', {observe: 'response'});
  }
}
