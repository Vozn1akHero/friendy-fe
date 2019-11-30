import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import * as AdministeredEventsActions from '../store/administered-events/administered-events.actions';
import Event from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient){}

  getLoggedInUserEvents(){
    return this.http.get('/api/event/user/loggedin',
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
      return events;
    }))
  }

  getAdministeredEvents(){
    return this.http.get('/api/event/user/loggedin/administered',
      {observe: 'body'}).pipe(
      map((res:any[]) => {
      let administeredEvents : Event[] = [];
      res.map(event => {
        administeredEvents.push(new Event(event.id,
          event.title,
          event.street,
          event.streetNumber,
          event.city,
          event.avatarPath,
          event.participantsAmount,
          event.currentParticipantsAmount,
          event.date))
      });
      return administeredEvents;
    }))
  }

  filterAdministeredEvents(keyword : string){
    return this.http.get(`/api/event/filter/administered/?keyword=${keyword}`,
      {observe: 'body'}).pipe(
      map((res:any[]) => {
        return res;
    }))
  }
}
