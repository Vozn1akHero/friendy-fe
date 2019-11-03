import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {FriendsSearchService} from '../services/friends-search.service';
import FoundUserModel from '../models/found-user.model';

@Injectable()
export class ExemplaryUsersResolver implements Resolve<FoundUserModel[]> {
  constructor(private friendsSearchService: FriendsSearchService) {}

  resolve(route: ActivatedRouteSnapshot){
    return this.friendsSearchService
      .getExemplaryUsers(1, 20);
  }
}
