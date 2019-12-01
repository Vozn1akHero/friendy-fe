import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import * as signalR from'@aspnet/signalr';
import {HubConnection} from '@aspnet/signalr';
import NewPost from '../models/new-post.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostCommentsModalService {
  get opened(): BehaviorSubject<boolean> {
    return this._opened;
  }

  set opened(value: BehaviorSubject<boolean>) {
    this._opened = value;
  }

  private _opened = new BehaviorSubject(false);

  constructor(private http: HttpClient){}
}
