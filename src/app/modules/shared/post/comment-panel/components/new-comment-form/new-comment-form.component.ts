import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import NewCommentModel from "../../models/new-comment.model";
import autosize from "autosize";
import { NewCommentOrResponseService } from "../../services/new-comment-or-response.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/reducers";
import * as CommentResponseActions from "../../store/comment-response/comment-response.actions";
import * as PostCommentActions from "../../store/post-comment/post-comment.actions";
import { NewCommentResponseModel } from "../../models/new-comment-response.model";
import NewResponseToResponseModel from "../../models/new-response-to-response.model";
import { CommentType } from "../../../comment-type.enum";

@Component({
  selector: "app-new-comment-form",
  templateUrl: "./new-comment-form.component.html",
  styleUrls: ["./new-comment-form.component.scss"]
})
export class NewCommentFormComponent implements OnInit {
  @ViewChild("image") image;
  @ViewChild("textAreaElement") textAreaElement: ElementRef;
  @ViewChild("formElement") form: ElementRef;
  @Input() postId: number;
  typingActive: boolean;

  constructor(
    private store: Store<AppState>,
    private newCommentOrResponseService: NewCommentOrResponseService
  ) {}

  ngOnInit() {
    autosize(this.textAreaElement.nativeElement);
    this.newCommentOrResponseService.commentType = CommentType.PostComment;
    this.newCommentOrResponseService.initData = { postId: this.postId };
  }

  onSubmit() {
    const content = this.textAreaElement.nativeElement.value;
    const image = this.image.nativeElement.files[0];
    if (
      this.newCommentOrResponseService.commentType ===
      CommentType.ResponseToComment
    ) {
      const {
        postId,
        commentId
      } = this.newCommentOrResponseService.responseToCommentInitData;
      const newComment: NewCommentResponseModel = new NewCommentResponseModel(
        postId,
        commentId,
        content,
        image
      );
      this.store.dispatch(new CommentResponseActions.Create(newComment));
    } else if (
      this.newCommentOrResponseService.commentType ===
      CommentType.ResponseToCommentResponse
    ) {
      const {
        postId,
        commentId,
        responseToCommentId
      } = this.newCommentOrResponseService.responseToResponseInitData;
      const res: NewResponseToResponseModel = new NewResponseToResponseModel(
        postId,
        responseToCommentId,
        commentId,
        content,
        image
      );
      this.store.dispatch(
        new CommentResponseActions.CreateResponseToResponse(res)
      );
    } else {
      const newComment: NewCommentModel = new NewCommentModel(
        this.newCommentOrResponseService.commentToPostInitData.postId,
        content,
        image
      );
      this.store.dispatch(new PostCommentActions.Create(newComment));
    }
  }

  onKeypress($event: KeyboardEvent) {
    if ($event.keyCode === 13) {
      this.onSubmit();
    }
  }

  activateTyping() {
    this.typingActive = true;
  }
}
