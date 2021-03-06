import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import CommentModel from "../../../models/comment.model";
import * as moment from "moment";

@Component({
  selector: "app-comment-item",
  templateUrl: "./comment-item.component.html",
  styleUrls: ["./comment-item.component.scss"]
})
export class CommentItemComponent implements OnInit {
  @Input() userId: number;
  @Input() privilegedToDeleteRelatedEntries: boolean | never;
  @Input() comment: CommentModel;
  @Output() actResponseToCommentEmitter: EventEmitter<
    CommentModel
  > = new EventEmitter();
  @Output() likeEmitter: EventEmitter<number> = new EventEmitter();
  @Output() unlikeEmitter: EventEmitter<number> = new EventEmitter();
  timePassed: string;
  responsesShown: boolean;
  newCommentResponseFormVisible: boolean;

  ngOnInit() {
    this.timePassed = moment(this.comment.date).fromNow();
  }

  onRespondBtnClick() {
    this.actResponseToCommentEmitter.emit(this.comment);
    this.newCommentResponseFormVisible = true;
  }

  onRemoveComment() {}

  like() {
    this.likeEmitter.emit(this.comment.id);
  }

  unlike() {
    this.unlikeEmitter.emit(this.comment.id);
  }

  onShowCommentsBtnClick() {
    this.actResponseToCommentEmitter.emit(this.comment);
    this.responsesShown = true;
  }

  onLikeOrUnlikePost() {
    if (!this.comment.isCommentLikedByUser) {
      this.like();
    } else {
      this.unlike();
    }
  }
}
