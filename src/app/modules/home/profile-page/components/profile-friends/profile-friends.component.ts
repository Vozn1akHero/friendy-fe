import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import ExemplaryFriend from '../../models/exemplary-friend.model';
import * as UserExemplaryFriends from '../../store/user-exemplary-friends/user-exemplary-friends.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-profile-friends',
  templateUrl: './profile-friends.component.html',
  styleUrls: ['./profile-friends.component.scss']
})
export class ProfileFriendsComponent implements OnInit, OnDestroy {
  //@Input() exemplaryFriends: ExemplaryFriend[];
  exemplaryFriends: ExemplaryFriend[];
  exemplaryFriendsLoaded$: Observable<boolean>;
  exemplaryFriendsSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.getExemplaryFriends();
  }

  getExemplaryFriends(){
    this.exemplaryFriendsLoaded$ = this.store.select(state => state.profilePageUserExemplaryFriends.loaded);
    this.store.dispatch(new UserExemplaryFriends.GetExemplaryFriends());
    this.exemplaryFriendsSubscription = this.store
      .select(state => state.profilePageUserExemplaryFriends.exemplaryFriends)
      .subscribe(exemplaryFriends => {
        this.exemplaryFriends = exemplaryFriends;
      })
  }

  ngOnDestroy(): void {
    this.exemplaryFriendsSubscription.unsubscribe();
  }
}
