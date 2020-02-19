import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import EventPost from '../../../home/event-page/models/event-post.model';
import {BehaviorSubject, Observable} from 'rxjs';
import EventAvatar from '../../../home/event-page/models/event-avatar.model';
import {EventPostService} from '../../../home/event-page/services/event-post.service';
import SubscriptionManager from '../../../../shared/helpers/SubscriptionManager';
import * as moment from 'moment';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post : any;
  timePassed : string;
  @Input() userId: number;
  @Input() privilegedToDeleteRelatedEntries: boolean|never;
  //@Input() removeBtnVisible: boolean = false;
  @Output() likePostEmitter: EventEmitter<number> = new EventEmitter();
  @Output() unlikePostEmitter: EventEmitter<number> = new EventEmitter();
  @Output() removePostEmitter: EventEmitter<number> = new EventEmitter();
  @Output() redirectToCommentsEmitter: EventEmitter<number> = new EventEmitter();
  commentsShowed: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private subscriptionManager : SubscriptionManager) { }

  ngOnInit() {
    this.timePassed = moment(this.post.date).fromNow();
  }

  onLikeOrUnlikePost(){
    if(this.post.isPostLikedByUser) this.onUnlikePost();
    else this.onLikePost();
  }

  onRemovePost(){
    this.removePostEmitter.emit(this.post.postId);
  }

  onLikePost(){
    this.likePostEmitter.emit(this.post.postId);
    this.post.isPostLikedByUser = true;
    this.post.likesCount++;
  }

  onUnlikePost(){
    this.unlikePostEmitter.emit(this.post.postId);
    this.post.isPostLikedByUser = false;
    this.post.likesCount--;
  }

  showComments(){
    this.commentsShowed.next(true);
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
