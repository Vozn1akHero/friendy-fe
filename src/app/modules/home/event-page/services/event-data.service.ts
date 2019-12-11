import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import EventShortened from '../models/event-shortened.model';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  constructor(private http: HttpClient) {
  }

  getEventData(id : number){
    return this.http.get(`api/event/${id}`, {
      observe: 'body'
    }).pipe(
      map((res : any) => {
          return new EventShortened(res.id,
            res.title,
            res.street,
            res.streetNumber,
            res.city,
            res.avatarPath,
            res.backgroundPath,
            res.participantsAmount,
            res.currentParticipantsAmount,
            res.date);
        }
      ))
  }
}
