import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import EventBackground from "../models/event-background.model";

@Injectable({
  providedIn: "root"
})
export class EventBackgroundService {
  private _eventBackground = new BehaviorSubject(null);
  private _eventBackgroundLoaded = new BehaviorSubject(false);

  private set eventBackground(value: EventBackground) {
    this._eventBackground.next(value);
  }

  private set eventBackgroundLoaded(value: boolean) {
    this._eventBackgroundLoaded.next(value);
  }

  public get eventBackground$(): Observable<EventBackground> {
    return this._eventBackground.asObservable();
  }

  public get eventBackgroundLoaded$(): Observable<boolean> {
    return this._eventBackgroundLoaded.asObservable();
  }

  constructor(private http: HttpClient) {}

  get(eventId: number) {
    this.http
      .get(`api/event/${eventId}/background`, { responseType: "text" })
      .subscribe(res => {
        this.eventBackground = new EventBackground(res);
        this.eventBackgroundLoaded = false;
      });
  }

  update(eventId: number, newBackground: File) {
    const content = new FormData();
    content.append("newBackground", newBackground);
    return this.http
      .put(`/api/event-data/${eventId}/background`, content, {
        responseType: "text"
      })
      .subscribe(res => {
        this.eventBackground = new EventBackground(res);
      });
  }
}
