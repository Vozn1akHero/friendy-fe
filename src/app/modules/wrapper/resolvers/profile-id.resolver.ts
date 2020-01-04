import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {UserIdService} from '../../../shared/services/user-id.service';
import {Observable} from 'rxjs';


@Injectable()
export class ProfileIdResolver implements Resolve<Observable<number>> {
  constructor(private userIdService: UserIdService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.userIdService.getUserId();
  }
}
