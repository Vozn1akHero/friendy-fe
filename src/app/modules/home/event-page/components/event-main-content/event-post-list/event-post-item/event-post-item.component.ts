import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import EventPost from '../../../../models/event-post.model';
import * as moment from 'moment';
import {EventPostService} from '../../../../services/event-post.service';
import EventAvatar from '../../../../models/event-avatar.model';
import {Observable} from 'rxjs';
import SubscriptionManager from '../../../../../../../shared/helpers/SubscriptionManager';

@Component({
  selector: 'app-event-post-item',
  templateUrl: './event-post-item.component.html',
  styleUrls: ['./event-post-item.component.scss']
})
export class EventPostItemComponent implements OnInit, OnDestroy {
  @Input() post : EventPost;
  timePassed : string;
  @Input() isEventAdmin: boolean;
  @Input() eventAvatar$: Observable<EventAvatar>;

  constructor(private eventPostService : EventPostService,
              private subscriptionManager : SubscriptionManager) { }

  ngOnInit() {
    this.timePassed = moment(this.post.date).fromNow();
  }

  onLikeOrUnlikePost(){
    if(this.post.isPostLikedByUser) this.onUnlikePost();
    else this.onLikePost();
  }

  onRemovePost(){
    this.subscriptionManager.add(this.eventPostService.delete(this.post.postId, this.post.eventId).subscribe());
  }

  onLikePost(){
    this.subscriptionManager.add(this.eventPostService.like(this.post.postId, this.post.eventId).subscribe());
    this.post.isPostLikedByUser = true;
  }

  onUnlikePost(){
    this.subscriptionManager.add(this.eventPostService.unlike(this.post.postId, this.post.eventId).subscribe());
    this.post.isPostLikedByUser = false;
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
