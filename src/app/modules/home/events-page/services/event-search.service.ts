import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import Event from '../models/event.model';
import EventSearchCriteriaModel from '../models/event-search-criteria.model';

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
      this.setEventsByResponse(res.body);
    }))
  }

  filterByCriteria(eventSearchCriteria: EventSearchCriteriaModel){
    return this.http.get(`api/event-search/with-criteria?title=${eventSearchCriteria.title}`, {observe: 'response'})
      .pipe(map((res : HttpResponse<any[]>) => {
        this.setEventsByResponse(res.body);
    }))
/*    return this.http.get(`http://localhost:9200/events/event/_search?q=title:${eventSearchCriteria.title}`, {observe: 'response'})
      .pipe(map((res : HttpResponse<any[]>) => {
      console.log(res.body);
    }))*/
  }

  private setEventsByResponse(response){
    let foundEvents : Event[] = [];
    response.map(event => {
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
  }
}
