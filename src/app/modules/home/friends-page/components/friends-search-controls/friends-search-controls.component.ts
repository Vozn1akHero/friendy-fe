import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import * as UserFriendsActions from "../../store/user-friends/user-friends.actions";
import * as SentFriendRequestsActions from "../../store/sent-friend-request/sent-friend-request.actions";
import * as ReceivedFriendRequestsActions from "../../store/received-friend-request/received-friend-request.actions";
import * as UserListActions from "../../store/user-list/user-list.actions";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../../../core/ngrx/store/app.reducer";

@Component({
  selector: "app-friends-search-controls",
  templateUrl: "./friends-search-controls.component.html",
  styleUrls: ["./friends-search-controls.component.scss"]
})
export class FriendsSearchControlsComponent implements OnInit {
  chosenSubpage: number;

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit() {
    switch (this.router.url) {
      case "/app/friends":
        this.chosenSubpage = 1;
        break;
      case "/app/friends?act=sent-friend-requests":
        this.chosenSubpage = 2;
        break;
      case "/app/friends?act=received-friend-requests":
        this.chosenSubpage = 3;
        break;
      case "/app/friends?act=search":
        this.chosenSubpage = 4;
        break;
      default:
        this.chosenSubpage = 1;
        break;
    }
  }

  searchFriends(keyword) {
    if ((this.chosenSubpage = 1)) {
      this.store.dispatch(new UserFriendsActions.FilterFriends({ keyword }));
    } else if ((this.chosenSubpage = 2)) {
      this.store.dispatch(
        new SentFriendRequestsActions.FindByKeyword({
          keyword
        })
      );
    } else if ((this.chosenSubpage = 3)) {
      this.store.dispatch(
        new ReceivedFriendRequestsActions.FindByKeyword({
          keyword
        })
      );
    } else if ((this.chosenSubpage = 4)) {
      this.store.dispatch(
        new UserListActions.FindByKeyword({
          keyword
        })
      );
    }
  }
}
