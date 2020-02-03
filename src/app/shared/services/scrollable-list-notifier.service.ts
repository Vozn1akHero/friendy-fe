import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ScrollableListNotifierService {
  private _endReached: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _currentPage: BehaviorSubject<number> = new BehaviorSubject(1);

  public get endReached$(){
    return this._endReached.asObservable();
  }
  public get currentPage(){
    return this._currentPage.getValue();
  }

  notify():void{
    this._currentPage.next(this._currentPage.getValue()+1);
    this._endReached.next(true);
  }

  setDefaultValue(){
    this._endReached.next(false);
  }
}
