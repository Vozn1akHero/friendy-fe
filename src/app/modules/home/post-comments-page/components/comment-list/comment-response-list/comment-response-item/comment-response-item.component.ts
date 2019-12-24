import {Component, Input, OnInit} from '@angular/core';
import CommentResponseModel from '../../../../models/comment-response.model';
import * as moment from "moment";

@Component({
  selector: 'app-comment-response-item',
  templateUrl: './comment-response-item.component.html',
  styleUrls: ['./comment-response-item.component.scss']
})
export class CommentResponseItemComponent implements OnInit {
  @Input() commentResponse: CommentResponseModel;
  timePassed: string;

  constructor() {}

  ngOnInit() {
    this.timePassed = moment(this.commentResponse.date).fromNow();
  }

  onLikeOrUnlikePost() {

  }
}
