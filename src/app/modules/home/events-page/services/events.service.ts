import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient){}

  getLoggedInUserEvents(){
    return this.http.get('/api/event/user/loggedin',
      {observe: 'response'});
  }

  getAdministeredEvents(){
    return this.http.get('/api/event/user/loggedin/administered',
      {observe: 'response'});
  }

  filterAdministeredEvents(keyword : string){
    return this.http.get(`/api/event/filter/administered/?keyword=${keyword}`,
      {observe: 'response'});
  }
}
