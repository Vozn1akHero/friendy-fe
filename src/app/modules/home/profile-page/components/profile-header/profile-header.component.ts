import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy
} from "@angular/core";
import { Observable, of, Subscription } from "rxjs";
import User from "../../models/user.model";
import { Store } from "@ngrx/store";
import * as UserDataActions from "../../store/user-data/user-data.actions";
import { AppState } from "../../store/reducers";

@Component({
  selector: "app-profile-header",
  templateUrl: "./profile-header.component.html",
  styleUrls: ["./profile-header.component.scss"]
})
export class ProfileHeaderComponent implements OnInit {
  @Input() activeSettings: boolean;
  @Input() isUserProfileOwner: boolean;
  @Input() userId: number;
  @ViewChild("userStatus") userStatus: ElementRef;
  @ViewChild("changedProfileBg") changedProfileBg: ElementRef;
  @ViewChild("changedProfileAvatar") changedProfileAvatar: ElementRef;
  userData$: Observable<User>;
  userDataLoaded$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.store.dispatch(new UserDataActions.GetUserData({ id: this.userId }));
    this.userData$ = this.store.select(
      state => state.profilePageUserData.profiles[this.userId]
    );
    this.userDataLoaded$ = this.store.select(
      state => state.profilePageUserData.profiles[this.userId] !== null
    );
  }

  toggleActiveSettings(value: boolean) {
    this.activeSettings = value;
  }
}
