import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import SubscriptionManager from "../../../../../../../shared/helpers/SubscriptionManager";
import { CommentType } from "../../../../comment-type.enum";
import CommentResponseModel from "../../../models/comment-response.model";
import { NewCommentResponseService } from "../../../services/new-comment-response.service";
import * as CommentResponseActions from "../../../store/comment-response/comment-response.actions";
import { AppState } from "../../../store/reducers";
import * as commentSelectors from "../../../store/selectors";

@Component({
  selector: "app-comment-response-list",
  templateUrl: "./comment-response-list.component.html",
  styleUrls: ["./comment-response-list.component.scss"]
})
export class CommentResponseListComponent implements OnInit, OnDestroy {
  @Input() commentId: number;
  @Input() postId: number;
  @Input() userId: number;
  @Input() privilegedToDeleteRelatedEntries: boolean | never;
  commentResponses$: Observable<CommentResponseModel[]>;
  loaded$: Observable<boolean>;

  constructor(
    private subscriptionManager: SubscriptionManager,
    private newCommentResponseService: NewCommentResponseService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.getCommentResponses();
  }

  activateResponseToResponseTyping(comment: CommentResponseModel) {
    this.newCommentResponseService.commentType =
      CommentType.ResponseToCommentResponse;
    this.newCommentResponseService.initData = {
      postId: this.postId,
      authorData: comment.authorName + " " + comment.authorSurname,
      commentId: this.commentId,
      responseToCommentId: comment.id
    };
  }

  getCommentResponses() {
    this.loaded$ = this.store.select(
      e => e.postCommentsPanelCommentResponses.loaded
    );
    this.commentResponses$ = this.store.pipe(
      select(commentSelectors.selectCommentResponsesByCommentId, {
        commentId: this.commentId
      })
    );
    this.store.dispatch(
      new CommentResponseActions.GetCommentResponses({
        commentId: this.commentId
      })
    );
  }

  like(commentResponseId: number) {
    this.store.dispatch(
      new CommentResponseActions.Like({
        parentCommentId: this.commentId,
        id: commentResponseId
      })
    );
  }

  unlike(commentResponseId: number) {
    this.store.dispatch(
      new CommentResponseActions.Unlike({
        parentCommentId: this.commentId,
        id: commentResponseId
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
