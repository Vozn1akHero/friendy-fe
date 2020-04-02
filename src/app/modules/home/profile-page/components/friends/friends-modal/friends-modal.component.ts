import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import UserFriend from "../../../models/user-friend.model";
import * as UserFriendActions from "../../../store/user-friends/user-friends.actions";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { AppState } from "../../../store/reducers";

@Component({
  selector: "app-friends-modal",
  templateUrl: "./friends-modal.component.html",
  styleUrls: ["./friends-modal.component.scss"]
})
export class FriendsModalComponent implements OnInit {
  userFriends$: Observable<UserFriend[]>;
  loaded$: Observable<boolean>;
  @Input() isUserProfileOwner: boolean;
  @Input() userId: number;
  @Output() closeEmitter: EventEmitter<void> = new EventEmitter();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new UserFriendActions.GetInitial({ id: this.userId }));
    this.loaded$ = this.store.select(
      state => state.profilePageUserFriends.loaded[this.userId]
    );
    this.userFriends$ = this.store.select(
      state => state.profilePageUserFriends.entries[this.userId]
    );
  }

  closePopup() {
    this.closeEmitter.emit();
  }
}
