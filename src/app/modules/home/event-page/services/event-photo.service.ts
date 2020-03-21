import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  Observable
} from "rxjs";
import EventPhoto from "../models/event-photo.model";
import {
  map
} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class EventPhotoService {
  private _eventPhotos: BehaviorSubject<{
    [id: number]: EventPhoto[];
  }> = new BehaviorSubject({});
  private _loaded: BehaviorSubject<{
    [id: number]: boolean;
  }> = new BehaviorSubject({});

  public eventPhotosById(id: number): Observable<EventPhoto[]> {
    return this._eventPhotos.pipe(
      map(value => {
        return value[id];
      })
    );
  }

  public loadedById(id: number): Observable<boolean> {
    return this._loaded.pipe(
      map(value => {
        return value[id];
      })
    );
  }

  constructor(private http: HttpClient) {}

  getExemplary(id: number) {
    const loaded = this._loaded.getValue()[id];
    console.log(loaded, this._loaded.getValue());
    if (!loaded) {
      return this.http
        .get(`api/event-photo/${id}/page/1?length=6`, {
          observe: "body"
        })
        .pipe(
          map((res: any[]) => {
            this._eventPhotos.next({
              ...this._eventPhotos.getValue(),
              [id]: [...res.map(value => new EventPhoto(value.path))]
            });
            this._loaded.next({
              ...this._loaded.getValue(),
              [id]: true
            });
          })
        )
        .toPromise();
    }
  }
}
