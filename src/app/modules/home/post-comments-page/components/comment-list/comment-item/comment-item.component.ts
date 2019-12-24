import {Component, Input, OnInit} from '@angular/core';
import CommentModel from '../../../models/comment.model';
import * as moment from "moment";

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() comment : CommentModel;
  timePassed: string;
  responsesShown: boolean;

  constructor() { }

  ngOnInit() {
    this.timePassed = moment(this.comment.date).fromNow();
  }

  onRemoveComment() {

  }

  onShowCommentsBtnClick() {
    this.responsesShown = true;
  }

  onLikeOrUnlikePost() {

  }
}
