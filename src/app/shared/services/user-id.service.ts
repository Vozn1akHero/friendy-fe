import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserIdService{
  private _userId = new BehaviorSubject(0);
  private _userIdLoaded = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  set userId(value : number){
    this._userId.next(value);
  }

  get userId() : number{
    return this._userId.getValue();
  }

  public set userIdLoaded(value : boolean){
    this._userIdLoaded.next(value);
  }

  getUserId(){
    return this.http.get(`api/user/profile-id`)
      .pipe(take(1))
      .subscribe(res => {
        this.userId = +res;
        this.userIdLoaded = true;
      })
  }
}
