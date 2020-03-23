import { Component, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { ScrollableListNotifierService } from "../../../shared/services/scrollable-list-notifier.service";
import { FriendsSearchService } from "./services/friends-search.service";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import * as UserListActions from "./store/user-list/user-list.actions";
import { AppState } from "./store/reducers";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-friends",
  templateUrl: "./friends-page.component.html",
  styleUrls: ["./friends-page.component.scss"],
  providers: [ScrollableListNotifierService]
})
export class FriendsPageComponent implements OnInit {
  //searchActivated$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  subpageIndex$ = new BehaviorSubject<number>(1);

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private scrollableListNotifierService: ScrollableListNotifierService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams["act"] === "search") {
        this.subpageIndex$.next(4);
      } else if (queryParams["act"] === "sent-friend-requests") {
        this.subpageIndex$.next(3);
      } else if (queryParams["act"] === "received-friend-requests") {
        this.subpageIndex$.next(2);
      } else {
        this.subpageIndex$.next(1);
      }
    });
  }

  searchFormSubmit($event) {
    this.store.dispatch(
      new UserListActions.FindByCriteria({ criteria: $event, page: 1 })
    );
    this.router.navigate(["/app/friends"], { queryParams: { act: "search" } });
  }

  updateFriendList() {
    this.scrollableListNotifierService.notify();
  }
}
