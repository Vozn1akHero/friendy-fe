import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from "moment";
import CommentResponseModel from '../../../../models/comment-response.model';


@Component({
  selector: 'app-comment-response-item',
  templateUrl: './comment-response-item.component.html',
  styleUrls: ['./comment-response-item.component.scss']
})
export class CommentResponseItemComponent implements OnInit {
  @Input() commentResponse: CommentResponseModel;
  @Output() actResponseToResponseEmitter: EventEmitter<number> = new EventEmitter();
  timePassed: string;
  @Output() likeEmitter: EventEmitter<number> = new EventEmitter();
  @Output() unlikeEmitter: EventEmitter<number> = new EventEmitter();
  @Input() userId: number;
  @Input() privilegedToDeleteRelatedEntries: boolean|never;

  constructor() {}

  onRespondBtnClick(){
    this.actResponseToResponseEmitter.emit(this.commentResponse.id);
  }

  ngOnInit() {
    this.timePassed = moment(this.commentResponse.date).fromNow();
  }

  like(){
    this.likeEmitter.emit(this.commentResponse.id);
  }

  unlike(){
    this.unlikeEmitter.emit(this.commentResponse.id);
  }

  onLikeOrUnlike() {
    if(!this.commentResponse.isCommentLikedByUser){
      this.like();
    } else {
      this.unlike();
    }
  }
}
