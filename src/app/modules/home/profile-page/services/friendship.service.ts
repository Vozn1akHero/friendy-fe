import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Subject} from 'rxjs';
import {FriendshipStatus} from '../models/friendship-status.enum';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {
  private _friendshipStatus : Subject<number> = new Subject();
  private _loaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public get friendshipStatus$(){return this._friendshipStatus.asObservable();}
  public get loaded$(){return this._loaded.asObservable();}

  constructor(private http: HttpClient){}

  getFriendshipStatus(userId : number){
    return this.http.get(`api/friend/status/${userId}`,
      {observe: 'response'}).pipe(map((res: HttpResponse<number>) => {
      const fsIndex: number = res.body;
      this._friendshipStatus.next(fsIndex);
      this._loaded.next(true);
    })).toPromise();
  }

  sendFriendRequest(id: number){
    this._friendshipStatus.next(2);
    return this.http.post(`api/friend/request/${id}`, {observe: 'response'});
  }

  removeFriendRequest(id: number){
    this._friendshipStatus.next(0);
    return this.http.delete(`api/friend/request/${id}`, {observe: 'response'});
  }
}
