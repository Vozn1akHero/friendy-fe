import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import ExemplaryFriend from "../../models/exemplary-friend.model";
import * as UserExemplaryFriends from "../../store/user-exemplary-friends/user-exemplary-friends.actions";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { AppState } from "../../store/reducers";

@Component({
  selector: "friends",
  templateUrl: "./friends.component.html",
  styleUrls: ["./friends.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendsComponent implements OnInit {
  exemplaryFriends$: Observable<ExemplaryFriend[]>;
  loaded$: Observable<boolean>;
  @Input() isUserProfileOwner: boolean;
  @Input() userId: number;

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
}
