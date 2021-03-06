import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ScrollableListNotifierService {
  private _endReached: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _currentPage: BehaviorSubject<number> = new BehaviorSubject(1);

  public get endReached$() {
    return this._endReached.asObservable();
  }
  public get currentPage() {
    return this._currentPage.getValue();
  }
  public set currentPage(value: number) {
    this._currentPage.next(value);
  }

  notify(): void {
    this._currentPage.next(this._currentPage.getValue() + 1);
    this._endReached.next(true);
  }

  setDefaultValue() {
    this._endReached.next(false);
  }

  reset() {
    this._endReached.next(false);
    this._currentPage.next(1);
  }
}
