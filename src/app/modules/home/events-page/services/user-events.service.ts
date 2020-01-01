import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import Event from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class UserEventsService {
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
    return this.http.get(`/api/event-search/administered/?keyword=${keyword}`,
      {observe: 'response'}).pipe(
      map((res:HttpResponse<any[]>) => {
        let administeredEvents : Event[] = [];
        res.body.map(event => {
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

  filterParticipatingByKeyword(keyword: string){
    return this.http.get(`api/event-search/participating/?keyword=${keyword}`,
      {observe: 'response'}).pipe(map((res:HttpResponse<any[]>) => {
      let events : Event[] = [];
      res.body.map(event => {
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
}
