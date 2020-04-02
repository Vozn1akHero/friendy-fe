import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import UserFriend from "../../models/user-friend.model";
import { AppState } from "../../store/reducers";
import * as UserExemplaryFriends from "../../store/user-exemplary-friends/user-exemplary-friends.actions";

@Component({
  selector: "friends",
  templateUrl: "./friends.component.html",
  styleUrls: ["./friends.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendsComponent implements OnInit {
  exemplaryFriends$: Observable<UserFriend[]>;
  loaded$: Observable<boolean>;
  @Input() isUserProfileOwner: boolean;
  @Input() userId: number;
  @Output() openFriendsModalEmitter: EventEmitter<void> = new EventEmitter();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getExemplaryFriends();
  }

  getExemplaryFriends() {
    this.store.dispatch(
      new UserExemplaryFriends.GetExemplaryFriends({ id: this.userId })
    );
    this.loaded$ = this.store.select(
      state => state.profilePageUserExemplaryFriends.loaded[this.userId]
    );
    this.exemplaryFriends$ = this.store.select(
      state =>
        state.profilePageUserExemplaryFriends.exemplaryFriends[this.userId]
    );
  }

  openFriendsModal() {
    this.openFriendsModalEmitter.emit();
  }
}
