import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {UserIdService} from '../../../shared/services/user-id.service';


@Injectable()
export class ProfileIdResolver implements Resolve<void> {
  constructor(private userIdService: UserIdService) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.userIdService.getUserId();
  }
}
