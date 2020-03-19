import { Component, OnDestroy, OnInit } from "@angular/core";
import * as UserFriendsActions from "../../store/user-friends/user-friends.actions";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../../../core/ngrx/store/app.reducer";
import { Observable, Subscription, of } from "rxjs";
import FriendModel from "../../models/friend.model";
import { ScrollableListNotifierService } from "../../../../../shared/services/scrollable-list-notifier.service";

@Component({
  selector: "app-friend-list",
  templateUrl: "./friend-list.component.html",
  styleUrls: ["./friend-list.component.scss"]
})
export class FriendListComponent implements OnInit, OnDestroy {
  friendList$: Observable<FriendModel[]>;
  friendsLoaded$: Observable<boolean>;
  scrollSubscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private scrollableListNotifierService: ScrollableListNotifierService
  ) {}

  ngOnInit() {
    this.getStartFriendList();
    this.setListScrollListener();
  }

  getStartFriendList() {
    this.store.dispatch(new UserFriendsActions.GetStartFriendList());
    this.friendsLoaded$ = this.store.select(
      state => state.friendsPageUserFriends.loaded
    );
    this.friendList$ = this.store.select(
      state => state.friendsPageUserFriends.friends
    );
  }

  setListScrollListener() {
    this.scrollSubscription = this.scrollableListNotifierService.endReached$.subscribe(
      value => {
        if (value) {
          this.store.dispatch(
            new UserFriendsActions.GetFriends({
              page: this.scrollableListNotifierService.currentPage,
              length: 20
            })
          );
          this.scrollableListNotifierService.setDefaultValue();
        }
      }
    );
  }

  removeFriend($event) {
    this.store.dispatch(new UserFriendsActions.RemoveFriend({ id: $event }));
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }
}
