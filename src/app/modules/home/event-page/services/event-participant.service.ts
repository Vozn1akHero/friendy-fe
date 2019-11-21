import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import EventShortened from '../models/event-shortened.model';
import * as EventDataActions from '../store/event-data/event-data.actions';
import EventExemplaryParticipant from '../models/event-exemplary-participant.model';
import EventParticipantListItem from '../models/event-participant-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class EventParticipantService {
  //participants: EventParticipantListItem[] = [];

  constructor(private http: HttpClient) {}

  getExemplary(eventId){
    return this.http.get<any[]>(`api/event-participant/exemplary/${eventId}`, {observe: 'body'}).pipe(map(res => {
      let eventParticipants: EventExemplaryParticipant[] = [];
      res.map(value => {
        eventParticipants.push(new EventExemplaryParticipant(value.id, value.avatarPath))
      });
      return eventParticipants;
    }))
  }

  getRange(eventId: number, startIndex: number, length: number){
    return this.http.get<any[]>(`api/event-participant/range?eventId=${eventId}&startIndex=${startIndex}&length=${length}`,
      {observe: 'body'}).pipe(map(res=>{
      let eventParticipants: EventParticipantListItem[] = [];
      res.map(value => {
        eventParticipants.push(new EventParticipantListItem(value.id, value.name, value.surname, value.avatarPath))
      });
      return eventParticipants;
    }))
  }
}
