import {Component, OnDestroy, OnInit} from '@angular/core';
import * as UserFriendsActions from '../../store/user-friends/user-friends.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import FriendModel from '../../models/friend.model';
import {ScrollableListNotifierService} from "../../../../../shared/services/scrollable-list-notifier.service";

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit, OnDestroy {
  friendList: FriendModel[];
  friendsLoaded$: Observable<boolean>;
  friendListSubscription: Subscription;
  scrollSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>, private scrollableListNotifierService : ScrollableListNotifierService) { }

  ngOnInit() {
    this.store.dispatch(new UserFriendsActions.GetFriends({page: 1}));

    this.friendsLoaded$ = this.store.select(state => state.friendsPageUserFriends.loaded);

    this.friendListSubscription = this.store.select(state => state.friendsPageUserFriends.friends)
      .subscribe(value => {
        this.friendList = value;
      });

    this.setListScrollListener();
  }

  setListScrollListener(){
    this.scrollSubscription = this.scrollableListNotifierService.endReached$.subscribe(value => {
      if(value){
        this.store.dispatch(new UserFriendsActions.GetFriends({page: this.scrollableListNotifierService.currentPage}));
        this.scrollableListNotifierService.setDefaultValue();
      }
    })
  }

  removeFriend($event){
    this.store.dispatch(new UserFriendsActions.RemoveFriend({ id: $event }))
  }

  ngOnDestroy(): void {
    this.friendListSubscription.unsubscribe();
    this.scrollSubscription.unsubscribe();
  }
}
