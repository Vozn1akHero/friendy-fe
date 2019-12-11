import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class EventParticipationRequestService {
  public get sent$(): Observable<boolean> {
    return this._sent.asObservable();
  }
  set sent(value: boolean) {
    this._sent.next(value);
  }
  private _sent = new BehaviorSubject(null);

  public get sentLoaded$(): Observable<boolean> {
    return this._sentLoaded.asObservable();
  }
  set sentLoaded(value: boolean) {
    this._sentLoaded.next(value);
  }
  private _sentLoaded = new BehaviorSubject(false);

  constructor(private http: HttpClient){}

  send(eventId: number, userId: number){
    return this.http.post(`api/event-participation-request`, {
      eventId: eventId,
      issuerId: userId
    }, { observe: 'response'}).pipe(map(() => {
      this.sent = true;
    }))
  }

  delete(eventId: number, userId: number){
    return this.http.delete(`api/event-participation-request/${eventId}/${userId}`,
      { observe: 'response'}).pipe(map(() => {
      this.sent = false;
    }))
  }

  getStatus(eventId: number, userId: number){
    return this.http.get(`api/event-participation-request/status/${eventId}/${userId}`,
      { observe: 'response' }).
    pipe(map((res: HttpResponse<boolean>) => {
      this.sent = res.body;
      this.sentLoaded = true;
    }))
  }
}
