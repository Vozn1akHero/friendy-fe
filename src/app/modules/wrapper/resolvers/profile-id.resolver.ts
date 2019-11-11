import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {UserDataService} from '../services/user-data.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ProfileIdResolver implements Resolve<number> {
  constructor(private userDataService: UserDataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.userDataService.getUserId();
  }
}
