import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoModalService{
  get opened$(): Observable<boolean> {
    return this._opened.asObservable();
  }
  get message$(): Observable<string> {
    return this._message.asObservable();
  }

  private _opened: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _message: BehaviorSubject<string> = new BehaviorSubject(null);

  openWithMessage(message: string){
    this._opened.next(true);
    this._message.next(message);
  }

  close(){
    this._opened.next(false);
    this._message.next(null);
  }
}
