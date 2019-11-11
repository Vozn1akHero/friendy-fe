import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ProfilePageService} from '../services/profile-page.service';


@Injectable()
export class ProfileBelongingResolver implements Resolve<boolean> {
  constructor(private profilePageService: ProfilePageService,) {}

  resolve(route: ActivatedRouteSnapshot) {
      return this.profilePageService.getProfileBelongingStatus(+route.paramMap.get('id'));
  }
}
