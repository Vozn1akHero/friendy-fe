import { UserAvatarService } from "./services/user-avatar.service";
import { ExemplaryPhotosService } from "./services/exemplary-photos.service";
import { FriendshipService } from "./../../../shared/services/friendship.service";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserIdService } from "../../../shared/services/user-id.service";
import { Store } from "@ngrx/store";
import { ScrollableListNotifierService } from "../../../shared/services/scrollable-list-notifier.service";
import { AppState } from "./store/reducers";
import { ExemplaryFriendsService } from "./services/exemplary-friends.service";
import { UserPostService } from "./services/user-post.service";
import { UserDataService } from "../user-settings-page/services/user-data.service";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"],
  providers: [ScrollableListNotifierService]
})
export class ProfilePageComponent {
  activeSettings: boolean = false;
  isUserProfileOwner: boolean;
  userId: number;
  userDataLoaded$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserIdService,
    private store: Store<AppState>,
    private scrollableListNotifierService: ScrollableListNotifierService,
    private avatarService: UserAvatarService
  ) {
    if (!this.route.snapshot.paramMap.get("id")) {
      this.router.navigate(["app/profile", this.userIdService.userIdValue]);
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //this.isUserProfileOwner = this.route.snapshot.data.profileBelongingStatus;
    this.userId = +this.route.snapshot.params.id;
    this.isUserProfileOwner = this.userId === this.userIdService.userIdValue;
    this.userDataLoaded$ = this.store.select(
      state => state.profilePageUserData.profiles[this.userId] !== null
    );
  }

  newAvatarSubmitted() {
    this.avatarService.newAvatarModalOpened = false;
  }

  updateList() {
    this.scrollableListNotifierService.notify();
  }
}
