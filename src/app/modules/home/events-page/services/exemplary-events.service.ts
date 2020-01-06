import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import Event from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class ExemplaryEventsService {
  get exemplaryEvents$(): Observable<Event[]> {
    return this._exemplaryEvents.asObservable();
  }
  private set exemplaryEvents(value: Event[]) {
    this._exemplaryEvents.next(value);
  }
  private _exemplaryEvents = new BehaviorSubject([]);

  constructor(private http : HttpClient){}

  getExemplary(){
    return this.http.get(`/api/event/closest?length=${5}`,
      {observe: 'body'}).pipe(
      map((res:any[]) => {
        let events : Event[] = [];
        res.map(event => {
          events.push(new Event(event.id,
            event.title,
            event.street,
            event.streetNumber,
            event.city,
            event.avatarPath,
            event.participantsAmount,
            event.currentParticipantsAmount,
            event.date))
        });
        this.exemplaryEvents = events;
      }))
  }
}
