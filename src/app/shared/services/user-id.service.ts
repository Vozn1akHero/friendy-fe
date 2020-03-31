import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, take } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class UserIdService {
  private _userId = new BehaviorSubject(null);
  private _loaded = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  set userId(value: number) {
    this._userId.next(value);
  }

  public get userIdValue(): number {
    return this._userId.getValue();
  }

  get userId$(): Observable<number> {
    return this._userId.asObservable();
  }

  set loaded(value: boolean) {
    this._loaded.next(value);
  }

  public get loaded$() {
    return this._loaded.asObservable();
  }

  getUserId() {
    return this.http
      .get(`api/user/logged-in/with-selected-fields?selectedFields=Id`, {
        observe: "response"
      })
      .pipe(
        map((res: any) => {
          this.userId = res.body.id;
          this.loaded = true;
        })
      )
      .toPromise();
  }
}
