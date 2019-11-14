import { Component, OnInit } from '@angular/core';
import * as UserFriendsActions from '../../store/user-friends/user-friends.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import FriendModel from '../../models/friend.model';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {
  friendList: FriendModel[];
  friendsLoaded$: Observable<boolean>;
  friendListSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new UserFriendsActions.GetFriends({firstIndex: 1, lastIndex: 9}));

    this.friendsLoaded$ = this.store.select(state => state.friendsPageUserFriends.loaded);

    this.friendListSubscription = this.store.select(state => state.friendsPageUserFriends.friends)
      .subscribe(value => {
        this.friendList = value;
      })
  }

}
