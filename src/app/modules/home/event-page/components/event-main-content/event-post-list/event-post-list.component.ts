import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EventPostService} from '../../../services/event-post.service';
import EventPost from '../../../models/event-post.model';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {EventAvatarService} from '../../../services/event-avatar.service';
import {ScrollableListNotifierService} from "../../../../../../shared/services/scrollable-list-notifier.service";
import SubscriptionManager from "../../../../../../shared/helpers/SubscriptionManager";

@Component({
  selector: 'app-event-post-list',
  templateUrl: './event-post-list.component.html',
  styleUrls: ['./event-post-list.component.scss']
})
export class EventPostListComponent implements OnInit, OnDestroy {
  eventId:number;
  eventPosts$: Observable<EventPost[]>;
  eventPostsLoaded$: Observable<boolean>;
  @Input() isEventAdmin: boolean;

  constructor(private eventPostService : EventPostService,
              private eventAvatarService : EventAvatarService,
              private router: Router,
              private subscriptionManager : SubscriptionManager,
              private scrollableListNotifierService : ScrollableListNotifierService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventId = +this.route.snapshot.paramMap.get("id");
    this.getEventPosts();
    this.setEventPosts();
    this.setListScrollListener();
  }

  getEventPosts(){
    this.eventPostService.getByEventId(this.eventId, 1).subscribe()
  }

  setEventPosts(){
    this.eventPostsLoaded$ = this.eventPostService.loaded$;
    this.eventPosts$ = this.eventPostService.eventPosts$;
  }

  setListScrollListener(){
    this.subscriptionManager.add(this.scrollableListNotifierService.endReached$.subscribe(value => {
      if(value){
        this.eventPostService
          .getByEventId(this.eventId, this.scrollableListNotifierService.currentPage).subscribe();
        this.scrollableListNotifierService.setDefaultValue();
      }
    }))
  }

  onRemovePost(postId: number){
    this.subscriptionManager.add(this.eventPostService.delete(postId, this.eventId).subscribe());
  }

  onLikePost(postId: number){
    this.subscriptionManager.add(this.eventPostService.like(postId, this.eventId).subscribe());
  }

  onUnlikePost(postId: number){
    this.subscriptionManager.add(this.eventPostService.unlike(postId, this.eventId).subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }

  redirectToComments(postId: number) {
    this.router.navigate([window.location.pathname, 'comments', postId ])
  }
}
