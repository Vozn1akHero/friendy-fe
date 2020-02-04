import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import Friend from '../models/friend.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  constructor(private http: HttpClient){}

  filterFriends(keyword : string){
    return this.http.get(`/api/friend/filter?keyword=${keyword}`,
      {observe: 'body'})
      .pipe(
        map((res:any[]) => {
          let friends : Friend[] = [];
          res.map((friend:any) => {
            friends.push(new Friend(friend.id,
              friend.name,
              friend.surname,
              friend.onlineStatus,
              friend.avatarPath));
          });
          return friends;
        })
      )
  }

  getFriends(page : number){
    return this.http.get(`/api/friend/paginate/logged-in/${page}`,
      {observe: 'body'}).pipe(map((res:any[]) => {
      let friends : Friend[] = [];
      res.map((friend:any) => {
        friends.push(new Friend(friend.id,
          friend.name,
          friend.surname,
          friend.onlineStatus,
          friend.avatarPath));
      });
      return friends;
    }))
  }

  removeById(friendId: number){
    return this.http.delete(`api/friend/remove/${friendId}`)
  }

/*  getUsersByCriteria(criteria){
    return this.http.post('/api/user/getUsersByCriteria', criteria, { observe: 'body' })
  }*/
}
