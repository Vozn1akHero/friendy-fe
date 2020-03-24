import { AppState } from "./../../store/reducers";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { FriendRequest } from "../../models/friend-request.model";
import { Store } from "@ngrx/store";
import * as SentFriendRequestActions from "../../store/sent-friend-request/sent-friend-request.actions";

@Component({
  selector: "app-sent-friend-requests",
  templateUrl: "./sent-friend-requests.component.html",
  styleUrls: ["./sent-friend-requests.component.scss"]
})
export class SentFriendRequestsComponent implements OnInit {
  sentFriendRequests$: Observable<FriendRequest[]>;
  loaded$: Observable<boolean>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit() {
    this.store$.dispatch(
      new SentFriendRequestActions.Get({ page: 1, length: 20 })
    );
    this.sentFriendRequests$ = this.store$.select(
      e => e.sentFriendRequest.entries
    );
    this.loaded$ = this.store$.select(e => e.sentFriendRequest.loaded);
  }
}
