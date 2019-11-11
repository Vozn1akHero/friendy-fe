import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import EventShortened from '../models/event-shortened.model';
import * as EventDataActions from '../store/event-data/event-data.actions';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  constructor(private http: HttpClient) {
  }

  getEventData(id : number){
    return this.http.get(`api/event/${id}`, {
      observe: 'response'
    }).pipe(
      map(res => {
          const eventData : any = res.body;
          return new EventShortened(eventData.id,
            eventData.title,
            eventData.street,
            eventData.streetNumber,
            eventData.city,
            eventData.participantsAmount,
            eventData.date,
            eventData.avatar);
        }
      ))
  }
}
