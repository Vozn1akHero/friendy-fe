import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import EventPhoto from "../models/event-photo.model";

@Injectable({
  providedIn: "root"
})
export class EventPhotoService {
  private _eventPhotos = new BehaviorSubject([]);
  private _eventPhotosLoaded = new BehaviorSubject(false);

  private set eventPhotos(value: EventPhoto[]) {
    this._eventPhotos.next(value);
  }

  private set eventPhotosLoaded(value: boolean) {
    this._eventPhotosLoaded.next(value);
  }

  public get eventPhotosLoaded$() {
    return this._eventPhotosLoaded.asObservable();
  }

  public get eventPhotos$(): Observable<EventPhoto[]> {
    return this._eventPhotos.asObservable();
  }

  constructor(private http: HttpClient) {}

  getExemplary(eventId: number) {
    this.http
      .get(`api/event-photo/${eventId}/page/1?length=6`, {
        observe: "body"
      })
      .subscribe((res: any[]) => {
        this.eventPhotos = [...res.map(value => new EventPhoto(value.path))];
        this.eventPhotosLoaded = true;
      });
  }
}
