import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {EventAdminService} from '../services/event-admin.service';

@Injectable()
export class IsEventAdminResolver implements Resolve<boolean> {
  constructor(private eventAdminService : EventAdminService) {}

  resolve(route: ActivatedRouteSnapshot) : Observable<boolean> {
    return this.eventAdminService.isUserAdmin(route.params.id);
  }
}
