import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Post from '../../../models/post.model';
import * as moment from 'moment';
import ExtendedPost from '../../../models/extended-post.model';
import {Observable} from 'rxjs';
import UserAvatar from '../../../models/user-avatar.model';

@Component({
  selector: 'app-profile-post-item',
  templateUrl: './profile-post-item.component.html',
  styleUrls: ['./profile-post-item.component.scss']
})
export class ProfilePostItemComponent implements OnInit {
  @Input() post : Post;
  @Input() userAvatar : UserAvatar;
  @Input() userId : number;

  @Output() removePost: EventEmitter<number> = new EventEmitter<number>();
  @Output() likePost: EventEmitter<number> = new EventEmitter<number>();
  @Output() unlikePost: EventEmitter<number> = new EventEmitter<number>();

  timePassed: string;
  putLike: boolean = false;

  constructor() { }

  ngOnInit() {
    this.timePassed = moment(this.post.date).fromNow();

    this.post.userPostLikes.map(userPostLike => {
      if(userPostLike.userId === this.userId){
        this.putLike = true;
      }
    })
  }

  onRemovePostBtnClick(){
    this.removePost.emit(this.post.id);
  }

  onLikeOrUnlikePost(){
    if(this.putLike) this.unlikePost.emit(this.post.id);
    else this.likePost.emit(this.post.id);
  }
}
