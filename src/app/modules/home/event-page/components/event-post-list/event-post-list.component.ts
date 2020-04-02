import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ScrollableListNotifierService } from "@app/shared/services/scrollable-list-notifier.service";
import EventPost from "../../models/event-post.model";
import { EventPostService } from "../../services/event-post.service";
import SubscriptionManager from "@app/shared/helpers/SubscriptionManager";

@Component({
  selector: "app-event-post-list",
  templateUrl: "./event-post-list.component.html",
  styleUrls: ["./event-post-list.component.scss"]
})
export class EventPostListComponent implements OnInit, OnDestroy {
  eventId: number;
  eventPosts$: Observable<EventPost[]>;
  eventPostsLoaded$: Observable<boolean>;
  @Input() isEventAdmin: boolean;

  constructor(
    private eventPostService: EventPostService,
    private router: Router,
    private subscriptionManager: SubscriptionManager,
    private scrollableListNotifierService: ScrollableListNotifierService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.eventId = +this.route.snapshot.paramMap.get("id");
    this.eventPostService.getByEventId(this.eventId, 1);
    this.eventPostsLoaded$ = this.eventPostService.loaded$;
    this.eventPosts$ = this.eventPostService.eventPosts$;
    this.setListScrollListener();
  }

  setListScrollListener() {
    this.subscriptionManager.add(
      this.scrollableListNotifierService.endReached$.subscribe(value => {
        if (value) {
          this.eventPostService.getByEventId(
            this.eventId,
            this.scrollableListNotifierService.currentPage
          );
          this.scrollableListNotifierService.setDefaultValue();
        }
      })
    );
  }

  onRemovePost(postId: number) {
    this.eventPostService.delete(postId, this.eventId);
  }

  onLikePost(postId: number) {
    this.eventPostService.like(postId, this.eventId);
  }

  onUnlikePost(postId: number) {
    this.eventPostService.unlike(postId, this.eventId);
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }

  redirectToComments(postId: number) {
    this.router.navigate([window.location.pathname, "comments", postId]);
  }
}
