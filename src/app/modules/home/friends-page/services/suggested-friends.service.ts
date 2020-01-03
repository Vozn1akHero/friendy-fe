import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import SuggestedFriendModel from '../models/suggested-friend.model';

@Injectable({
  providedIn: 'root'
})
export class SuggestedFriendsService {
  constructor(private http: HttpClient) {}

  private set suggestedFriends(value : SuggestedFriendModel[]){
    this._suggestedFriends.next(value);
  }
  public get suggestedFriends$():Observable<SuggestedFriendModel[]>{
    return this._suggestedFriends.asObservable();
  }
  private _suggestedFriends = new BehaviorSubject([]);

  private set suggestedFriendsLoaded(value : boolean){
    this._suggestedFriendsLoaded.next(value);
  }
  public get suggestedFriendsLoaded$():Observable<boolean>{
    return this._suggestedFriendsLoaded.asObservable();
  }
  private _suggestedFriendsLoaded = new BehaviorSubject(false);

  get(){
    if(this._suggestedFriends.getValue().length === 0)
    return this.http.get(`api/friendship-recommendation/recommendations`, {observe: 'response'})
      .pipe(map((res: HttpResponse<any[]>) => {
        let suggestedFriends : SuggestedFriendModel[] = [];
        res.body.map(value => {
          suggestedFriends.push(new SuggestedFriendModel(value.potentialFriend.id,
            value.potentialFriend.avatar,
            value.potentialFriend.name,
            value.potentialFriend.surname))
        });
        this.suggestedFriends = suggestedFriends;
        this.suggestedFriendsLoaded = true;
    }))
  }
}
