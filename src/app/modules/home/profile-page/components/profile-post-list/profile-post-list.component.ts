import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import Post from '../../models/post.model';
import User from '../../models/user.model';
import UserAvatar from '../../models/user-avatar.model';

@Component({
  selector: 'app-profile-post-list',
  templateUrl: './profile-post-list.component.html',
  styleUrls: ['./profile-post-list.component.scss']
})
export class ProfilePostListComponent implements OnInit {
  @Output() newPostEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() removePost: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() likePost: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() unlikePost: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  @Input() userPosts: Post[];
  @Input() userId: number;
  @Input() userAvatar: UserAvatar;


  constructor() { }

  ngOnInit() {
  }

  onNewPostCreated(newPost: FormGroup){
    this.newPostEvent.emit(newPost);
  }

  onUnlikePost(id){
    this.unlikePost.emit(id);
  }

  onLikePost(id){
    this.likePost.emit(id);
  }

  onRemovePost(id){
    this.removePost.emit(id);
  }
}
