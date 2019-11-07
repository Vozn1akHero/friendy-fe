import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import * as signalR from'@aspnet/signalr';
import {HubConnection} from '@aspnet/signalr';
import UserAvatar from '../models/user-avatar.model';

@Injectable({
  providedIn: 'root'
})
export class UserAvatarService {
  private connection : HubConnection;

  constructor(private http: HttpClient){

  }

  getAvatar(){
    return this.http.get('/api/user/avatar', {observe: 'response'});
  }

  updateAvatar(avatarBytes: string){
    return this.http.put('/api/user/avatar', avatarBytes, {observe: 'response'});
  }
}
