import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import EventAvatar from "../models/event-avatar.model";

@Injectable({
  providedIn: "root"
})
export class EventAvatarService {
  private _eventAvatar = new BehaviorSubject(null);

  private set eventAvatar(value: EventAvatar) {
    this._eventAvatar.next(value);
  }

  private get eventAvatar(): EventAvatar {
    return this._eventAvatar.value;
  }

  public get eventAvatar$(): Observable<EventAvatar> {
    return this._eventAvatar.asObservable();
  }

  constructor(private http: HttpClient) {}

  update(eventId: number, newAvatar: File) {
    const content = new FormData();
    content.append("newAvatar", newAvatar);
    return this.http.put(`/api/event-data/${eventId}/avatar`, content, {
      responseType: "text"
    });
  }
}
