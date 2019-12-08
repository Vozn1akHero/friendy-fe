import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {EventCreatorService} from '../services/event-creator.service';

@Injectable()
export class IsEventCreatorResolver implements Resolve<boolean> {
  constructor(private eventCreatorService : EventCreatorService) {}

  resolve(route: ActivatedRouteSnapshot) : Observable<boolean> {
    return this.eventCreatorService.isEventCreator(route.params.id);
  }
}
