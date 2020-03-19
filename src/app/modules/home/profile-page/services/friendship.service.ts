import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class FriendshipService {
  private _friendshipStatus: Subject<number> = new Subject();
  private _loaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public get friendshipStatus$() {
    return this._friendshipStatus.asObservable();
  }
  public get loaded$() {
    return this._loaded.asObservable();
  }

  constructor(private http: HttpClient) {}

  getFriendshipStatus(userId: number) {
    return this.http
      .get(`api/friend/status/${userId}`, { observe: "response" })
      .pipe(
        map((res: HttpResponse<number>) => {
          const fsIndex: number = res.body;
          this._friendshipStatus.next(fsIndex);
          this._loaded.next(true);
        })
      )
      .toPromise();
  }

  sendFriendRequest(id: number) {
    return this.http
      .post(`api/friend/request/${id}`, { observe: "response" })
      .pipe(
        map((res: HttpResponse<any>) => {
          this._friendshipStatus.next(2);
        })
      )
      .toPromise();
  }

  removeFriendRequest(id: number) {
    return this.http
      .delete(`api/friend/request/${id}`, { observe: "response" })
      .pipe(
        map((res: HttpResponse<any>) => {
          this._friendshipStatus.next(1);
        })
      )
      .toPromise();
  }

  confirmFriendRequest(id: number) {
    return this.http
      .post(`api/friend/request/accept/${id}`, { observe: "response" })
      .pipe(
        map((res: HttpResponse<any>) => {
          this._friendshipStatus.next(0);
        })
      )
      .toPromise();
  }
}
