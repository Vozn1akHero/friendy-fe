import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Post from '../../../profile-page/models/post.model';
import * as moment from 'moment';

@Component({
  selector: 'app-common-profile-post-item',
  templateUrl: './common-profile-post-item.component.html',
  styleUrls: ['./common-profile-post-item.component.scss']
})
export class CommonProfilePostItemComponent implements OnInit {
  @Input() post : Post;
  @Input() avatar : string;

  @Output() likePost: EventEmitter<number> = new EventEmitter<number>();

  private timePassed: string;

  ngOnInit() {
    this.timePassed = moment(this.post.date).fromNow();
  }

  onLikePostBtnClick(){
    this.likePost.emit(this.post.id);
  }

  constructor() { }
}
