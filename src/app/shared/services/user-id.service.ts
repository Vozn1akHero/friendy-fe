import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';

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
    return this.http.get(`api/user/logged-in/with-selected-fields?selectedFields=Id`)
      .pipe(take(1))
      .subscribe((res:any) => {
        this.userId = res.id;
        this.userIdLoaded = true;
      })
  }
}
