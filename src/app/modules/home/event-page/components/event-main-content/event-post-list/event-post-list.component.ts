import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EventPostService} from '../../../services/event-post.service';
import EventPost from '../../../models/event-post.model';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../core/ngrx/store/app.reducer';
import EventAvatar from '../../../models/event-avatar.model';
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
  eventAvatar$: Observable<EventAvatar>;
  @Input() isEventAdmin: boolean;

  constructor(private eventPostService : EventPostService,
              private eventAvatarService : EventAvatarService,
              private subscriptionManager : SubscriptionManager,
              private scrollableListNotifierService : ScrollableListNotifierService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventAvatar$ = this.eventAvatarService.eventAvatar$;
    this.eventId = +this.route.snapshot.paramMap.get("id");
    this.getEventPosts();
    this.setEventPosts();
    this.setListScrollListener();
  }

  getEventPosts(){
    this.eventPostService.getByEventId(this.eventId, 1).subscribe()
  }

  setEventPosts(){
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

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
