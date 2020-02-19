import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {EventCreatorService} from '../services/event-creator.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class IsEventCreatorResolver implements Resolve<boolean> {
  constructor(private http: HttpClient){}
  //constructor(private eventCreatorService : EventCreatorService) {} //cannot be injected

  resolve(route: ActivatedRouteSnapshot) : Observable<boolean> {
    //return this.eventCreatorService.isEventCreator(route.params.id);
    const eventId = route.params.id;
    return this.http.get<boolean>(`api/event-admins/is-creator/${eventId}`)
  }
}
