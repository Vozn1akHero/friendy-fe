import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import Event from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventSearchService {
  get foundEvents$(): Observable<Event[]> {
    return this._foundEvents.asObservable();
  }
  private set foundEvents(value: Event[]) {
    this._foundEvents.next(value);
  }
  private _foundEvents = new BehaviorSubject([]);

  constructor(private http: HttpClient){}

  filterByKeyword(keyword: string){
    return this.http.get(`api/event-search/${keyword}`,
      {observe: 'response'}).pipe(map((res:HttpResponse<any[]>) => {
      let foundEvents : Event[] = [];
      res.body.map(event => {
        foundEvents.push(new Event(event.id,
          event.title,
          event.street,
          event.streetNumber,
          event.city,
          event.avatarPath,
          event.participantsAmount,
          event.currentParticipantsAmount,
          event.date))
      });
      this.foundEvents = foundEvents;
    }))
  }
}
