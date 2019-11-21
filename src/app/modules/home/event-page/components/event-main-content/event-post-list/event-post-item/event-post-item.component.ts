import {Component, Input, OnInit} from '@angular/core';
import EventPost from '../../../../models/event-post.model';
import * as moment from 'moment';
import {EventPostService} from '../../../../services/event-post.service';

@Component({
  selector: 'app-event-post-item',
  templateUrl: './event-post-item.component.html',
  styleUrls: ['./event-post-item.component.scss']
})
export class EventPostItemComponent implements OnInit {
  @Input() post : EventPost;
  timePassed : string;
  @Input() eventAvatarUrl: string;
  @Input() isEventAdmin: boolean;

  constructor(private eventPostService : EventPostService) { }

  ngOnInit() {
    this.timePassed = moment(this.post.date).fromNow();
  }

  onLikeOrUnlikePost(){
    if(this.post.isPostLikedByUser) this.onUnlikePost();
    else this.onLikePost();
  }

  onRemovePost(){
    this.eventPostService.delete(this.post.postId);
  }

  onLikePost(){
    this.eventPostService.like(this.post.postId);
    this.post.isPostLikedByUser = true;
  }

  onUnlikePost(){
    this.eventPostService.unlike(this.post.postId);
    this.post.isPostLikedByUser = false;
  }
}
