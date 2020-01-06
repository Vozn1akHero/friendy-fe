import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import ExemplaryChatModel from '../models/exemplary-chat.model';

@Injectable({
  providedIn: 'root'
})
export class ExemplaryChatsService {
  constructor(private http: HttpClient){}

  get(){
    return this.http.get(`/api/friend/range/logged-in?firstIndex=1&length=10`,
      {observe: 'body'}).pipe(map((res:any[]) => {
      let friends : ExemplaryChatModel[] = [];
      res.map((friend:any) => {
        friends.push(new ExemplaryChatModel(friend.id,
          friend.name,
          friend.surname,
          friend.avatarPath));
      });
      return friends;
    }))
  }
}
