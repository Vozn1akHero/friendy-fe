import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Post from '../../models/post.model';
import * as moment from 'moment';
import ExtendedPost from '../../models/extended-post.model';

@Component({
  selector: 'app-profile-post-item',
  templateUrl: './profile-post-item.component.html',
  styleUrls: ['./profile-post-item.component.scss']
})
export class ProfilePostItemComponent implements OnInit {
  @Input() post : Post;
  @Input() avatar : string;

  @Output() removePost: EventEmitter<number> = new EventEmitter<number>();
  @Output() likePost: EventEmitter<number> = new EventEmitter<number>();

  private timePassed: string;

  constructor() { }

  ngOnInit() {
    this.timePassed =  moment(this.post.date).fromNow();
  }

  onRemovePostBtnClick(){
    this.removePost.emit(this.post.id);
  }

  onLikePostBtnClick(){
    this.likePost.emit(this.post.id);
  }
}
