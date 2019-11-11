import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import EventShortened from '../models/event-shortened.model';
import * as EventDataActions from '../store/event-data/event-data.actions';
import EventAvatar from '../models/event-avatar.model';

@Injectable({
  providedIn: 'root'
})
export class EventAvatarService {
  constructor(private http: HttpClient) {
  }

  getEventData(id : number){
    return this.http.get(`api/event/avatar/${id}`, {
      observe: 'response'
    })
  }
}
