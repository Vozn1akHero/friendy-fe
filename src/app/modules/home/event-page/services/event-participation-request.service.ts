import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class EventParticipationRequestService {
  constructor(private http: HttpClient){}

  send(eventId: number, userId: number){
    return this.http.post(`api/event-participation-request`, {
      eventId: eventId,
      issuerId: userId
    }, { observe: 'response'});
  }

  delete(eventId: number, userId: number){
    return this.http.delete(`api/event-participation-request/${eventId}/${userId}`,
      { observe: 'response'});
  }

  getStatus(eventId: number, userId: number){
    return this.http.get(`api/event-participation-request/status/${eventId}/${userId}`, { observe: 'response' })
  }
}
