import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import ExemplaryFriend from '../../models/exemplary-friend.model';
import * as UserExemplaryFriends from '../../store/user-exemplary-friends/user-exemplary-friends.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import {AppState} from '../../store/reducers';

@Component({
  selector: 'profile-exemplary-friends-panel',
  templateUrl: './profile-exemplary-friends-panel.component.html',
  styleUrls: ['./profile-exemplary-friends-panel.component.scss']
})
export class ProfileExemplaryFriendsPanelComponent implements OnInit, OnDestroy {
  //@Input() exemplaryFriends: ExemplaryFriend[];
  exemplaryFriends: ExemplaryFriend[];
  exemplaryFriendsLoading$: Observable<boolean>;
  exemplaryFriendsSubscription: Subscription;
  @Input() isUserProfileOwner : boolean;
  @Input() userId : number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getExemplaryFriends();
  }

  getExemplaryFriends(){
    this.exemplaryFriendsLoading$ = this.store.select(state => state.profilePageUserExemplaryFriends.loading);
    this.store.dispatch(new UserExemplaryFriends.GetExemplaryFriends({ id : this.userId }));
    this.exemplaryFriendsSubscription = this.store
      .select(state => state.profilePageUserExemplaryFriends.exemplaryFriends)
      .subscribe(exemplaryFriends => {
        this.exemplaryFriends = exemplaryFriends.slice(0, 3);
      })
  }

  ngOnDestroy(): void {
    this.exemplaryFriendsSubscription.unsubscribe();
  }
}
