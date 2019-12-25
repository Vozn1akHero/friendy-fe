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

  public get userIdValue() : number{
    return this._userId.getValue();
  }

  get userId$() : Observable<number>{
    return this._userId.asObservable();
  }

  set userIdLoaded(value : boolean){
    this._userIdLoaded.next(value);
  }

  public get userIdLoaded$(){
    return this._userIdLoaded.asObservable();
  }

  getUserId(){
    return this.http.get(`api/user/logged-in/with-selected-fields?selectedFields=Id`, {observe: 'response'})
      .pipe(take(1))
      .subscribe((res:any) => {
        this.userId = res.body.id;
        this.userIdLoaded = true;
      })
  }
}
