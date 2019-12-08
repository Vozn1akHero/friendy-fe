import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventAdminService {
  isEventAdmin: boolean;

  constructor(private http: HttpClient) {
  }

  isUserAdmin(eventId: number){
    return this.http.get<boolean>(`api/event-admins/is-admin/${eventId}`);
  }
}
