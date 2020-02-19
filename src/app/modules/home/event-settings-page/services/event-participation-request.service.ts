import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import {ParticipationRequestModel} from '../models/participation-request.model';

@Injectable()
export class EventParticipationRequestService {
  constructor(private http : HttpClient){}

  filterByKeyword(eventId : number, keyword: string){
    return this.http.get(`api/event-participation-request/${eventId}/filter?q=${keyword}`)
      .pipe(map((res: HttpResponse<any>) => {
        let participantRequests = [];
        res.body.map(value => {
          participantRequests.push(new ParticipationRequestModel(value.id,
            value.issuerId,
            value.name,
            value.surname,
            value.avatar))
        });
        return participantRequests;
      }))
  }

  getById(eventId: number, page: number){
    return this.http.get(`api/event-participation-request/${eventId}?page=${page}`, {observe: 'response'})
      .pipe(map((res: HttpResponse<any>) => {
        let participantRequests = [];
        res.body.map(value => {
          participantRequests.push(new ParticipationRequestModel(value.id,
            value.issuerId,
            value.name, value.surname, value.avatar))
        });
        return participantRequests;
      }))
  }

  delete(eventId: number, requestId: number){
    return this.http.delete(`api/event-participation-request/${eventId}/${requestId}`, {observe: 'response'})
  }

  confirm(eventId: number, issuerId: number){
    return this.http.post(`api/event-participation-request/${eventId}/confirm`, {
      eventId, issuerId
    }, {observe: 'response'})
  }
}
