import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAvatarService {
  newAvatar: File;
  newAvatarModalOpened: boolean;

  constructor(private http: HttpClient){}

/*  getAvatarByUserId(id:number){
    return this.http.get(`/api/user/${id}/avatar`, {responseType: 'text'});
  }*/

  updateAvatar(newAvatar:File){
    const content = new FormData();
    content.append("newAvatar", newAvatar);
    return this.http.put('/api/user/avatar', content, {responseType: 'text'});
  }
}
