import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';
import {FriendModel} from '../models/friend.model';

@Injectable({providedIn: 'root'})
export class FriendListService {
  constructor(private http : HttpClient){}

  getFriendList(page: number){
    return this.http.get(`/api/friend/paginate/logged-in/${page}`,
      {observe: 'body'}).pipe(map((res:any[]) => {
      let friends : FriendModel[] = [];
      res.map((friend:any) => {
        friends.push(new FriendModel(friend.id,
          friend.name,
          friend.surname,
          friend.avatarPath,
          friend.onlineStatus));
      });
      return friends;
    }))
  }
}
