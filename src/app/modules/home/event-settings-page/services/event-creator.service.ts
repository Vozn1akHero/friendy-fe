import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventCreatorService {
  constructor(private http: HttpClient){}

  isEventCreator(eventId: number){
    return this.http.get<boolean>(`api/event-admins/is-creator/${eventId}`)
  }
}
