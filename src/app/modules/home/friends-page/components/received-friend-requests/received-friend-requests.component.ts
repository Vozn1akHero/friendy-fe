import { Component, OnInit } from "@angular/core";
import * as ReceivedFriendRequestActions from "../../store/received-friend-request/received-friend-request.actions";
import { Observable } from "rxjs";
import { FriendRequest } from "../../models/friend-request.model";
import { AppState } from "./../../store/reducers";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-received-friend-requests",
  templateUrl: "./received-friend-requests.component.html",
  styleUrls: ["./received-friend-requests.component.scss"]
})
export class ReceivedFriendRequestsComponent implements OnInit {
  receivedFriendRequests$: Observable<FriendRequest[]>;
  loaded$: Observable<boolean>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit() {
    this.store$.dispatch(
      new ReceivedFriendRequestActions.Get({ page: 1, length: 20 })
    );
    this.receivedFriendRequests$ = this.store$.select(
      e => e.receivedFriendRequest.entries
    );
    this.loaded$ = this.store$.select(e => e.receivedFriendRequest.loaded);
  }
}
