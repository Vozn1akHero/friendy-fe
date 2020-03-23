import { HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { BaseData } from "./base-data.model";

@Injectable({
  providedIn: "root"
})
export class BaseDataService {
  private _eventBaseData = new BehaviorSubject<{
    [id: number]: {
      entry: BaseData;
      loaded: boolean;
    };
  }>({});
  private _userBaseData = new BehaviorSubject<{
    [id: number]: {
      entry: BaseData;
      loaded: boolean;
    };
  }>({});

  public getEventDataById(id: number) {
    return this._eventBaseData.pipe(map(val => val[id]));
  }

  public getUserDataById(id: number) {
    return this._userBaseData.pipe(map(val => val[id]));
  }

  getUserData(userId: number) {
    const loaded =
      this._userBaseData.getValue()[userId] != null
        ? this._userBaseData.getValue()[userId].loaded
        : false;
    if (!loaded)
      return this.http
        .get(
          `api/user/${userId}/with-selected-fields?selectedFields=Id,Name,Surname,Avatar`,
          { observe: "response" }
        )
        .pipe(
          map((res: HttpResponse<any>) => {
            this._userBaseData.next({
              ...this._userBaseData.getValue(),
              [userId]: {
                loaded: true,
                entry: new BaseData(
                  res.body.id,
                  res.body.name + " " + res.body.surname,
                  res.body.avatar
                )
              }
            });
          })
        )
        .toPromise();
  }

  getEventData(eventId: number) {
    const loaded =
      this._eventBaseData.getValue()[eventId] != null
        ? this._eventBaseData.getValue()[eventId].loaded
        : false;
    if (!loaded)
      return this.http
        .get(
          `api/event/${eventId}/with-selected-fields?selectedFields=Id,Title,Avatar`,
          { observe: "response" }
        )
        .pipe(
          map((res: HttpResponse<any>) => {
            this._eventBaseData.next({
              ...this._eventBaseData.getValue(),
              [eventId]: {
                loaded: true,
                entry: new BaseData(
                  res.body.id,
                  res.body.title,
                  res.body.avatar
                )
              }
            });
          })
        )
        .toPromise();
  }

  constructor(private http: HttpClient) {}
}
