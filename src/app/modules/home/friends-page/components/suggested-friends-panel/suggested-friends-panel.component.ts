import { Component, OnDestroy, OnInit } from "@angular/core";
import { SuggestedFriendsService } from "../../services/suggested-friends.service";
import SubscriptionManager from "../../../../../shared/helpers/SubscriptionManager";
import { Observable, of } from "rxjs";
import SuggestedFriendModel from "../../models/suggested-friend.model";
import { take } from "rxjs/operators";

@Component({
  selector: "app-suggested-friends-panel",
  templateUrl: "./suggested-friends-panel.component.html",
  styleUrls: ["./suggested-friends-panel.component.scss"]
})
export class SuggestedFriendsPanelComponent implements OnInit, OnDestroy {
  suggestedFriends$: Observable<SuggestedFriendModel[]>;
  suggestedFriendsLoaded$: Observable<boolean>;

  constructor(
    private suggestedFriendsService: SuggestedFriendsService,
    private subscriptionManager: SubscriptionManager
  ) {}

  ngOnInit() {
    this.getSuggestedFriends();
    this.setSuggestedFriends();
  }

  getSuggestedFriends() {
    this.subscriptionManager.add(
      this.suggestedFriendsService.suggestedFriendsLoaded$
        .pipe(take(1))
        .subscribe(value => {
          if (!value) {
            this.suggestedFriendsService.get().subscribe();
          }
        })
    );
  }

  setSuggestedFriends() {
    this.suggestedFriendsLoaded$ = this.suggestedFriendsService.suggestedFriendsLoaded$;
    this.suggestedFriends$ = this.suggestedFriendsService.suggestedFriends$;
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
