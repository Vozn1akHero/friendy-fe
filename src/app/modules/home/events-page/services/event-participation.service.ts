import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventParticipationService {
  constructor(private http: HttpClient){}

  leaveById(id: number){
    return this.http.delete(`api/event-participant/${id}/leave`, {observe: 'body'})
  }

  applyById(id: number){
    return this.http.post(`api/event-participation-request/${id}`,
      {},
      {observe: 'body'});
  }
}
