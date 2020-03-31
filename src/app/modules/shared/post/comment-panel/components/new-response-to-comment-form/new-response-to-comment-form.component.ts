import {
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input,
  OnInit
} from "@angular/core";
import { NewCommentResponseService } from "../../services/new-comment-response.service";
import { AppState } from "../../store/reducers";
import { Store } from "@ngrx/store";
import { NewCommentResponseModel } from "../../models/new-comment-response.model";
import { CommentType } from "../../../comment-type.enum";
import * as CommentResponseActions from "../../store/comment-response/comment-response.actions";
import NewResponseToResponseModel from "../../models/new-response-to-response.model";
import SubscriptionManager from "src/app/shared/helpers/SubscriptionManager";

@Component({
  selector: "app-new-response-to-comment-form",
  templateUrl: "./new-response-to-comment-form.component.html",
  styleUrls: ["./new-response-to-comment-form.component.scss"]
})
export class NewResponseToCommentFormComponent implements OnInit, OnDestroy {
  @ViewChild("image") image;
  @ViewChild("textAreaElement") textAreaElement: ElementRef;
  @ViewChild("formElement") form: ElementRef;
  @Input() postId: number;
  typingActive: boolean;

  constructor(
    private store: Store<AppState>,
    private subscriptionManager: SubscriptionManager,
    private newCommentResponseService: NewCommentResponseService
  ) {}

  ngOnInit() {
    if (this.newCommentResponseService.initData.authorData != null) {
      this.textAreaElement.nativeElement.value =
        this.newCommentResponseService.initData.authorData + ", ";
    }
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }

  onSubmit() {
    const content = this.textAreaElement.nativeElement.value
      .replace(/\s+/g, " ")
      .trim();
    const image = this.image.nativeElement.files[0];

    if (
      this.newCommentResponseService.commentType ===
      CommentType.ResponseToComment
    ) {
      const {
        postId,
        commentId
      } = this.newCommentResponseService.responseToCommentInitData;
      const newComment: NewCommentResponseModel = new NewCommentResponseModel(
        postId,
        commentId,
        content,
        image
      );
      this.store.dispatch(new CommentResponseActions.Create(newComment));
    } else if (
      this.newCommentResponseService.commentType ===
      CommentType.ResponseToCommentResponse
    ) {
      const {
        postId,
        commentId,
        responseToCommentId
      } = this.newCommentResponseService.responseToResponseInitData;
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
    }
  }

  listenToAuthorNameChange() {
    this.subscriptionManager.add(
      this.newCommentResponseService.initData$.subscribe(value => {
        this.textAreaElement.nativeElement.value = value.authorData + ", ";
      })
    );
  }

  activateTyping() {
    this.typingActive = true;
  }
}
