import { Component, Input, OnInit } from "@angular/core";
import CommentModel from "../../models/comment.model";
import { Observable, from } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../store/reducers";
import * as PostCommentActions from "../../store/post-comment/post-comment.actions";
import * as commentSelectors from "../../store/selectors";
import { distinctUntilChanged } from "rxjs/operators";
import { NewCommentService } from "../../services/new-comment.service";
import { NewCommentResponseService } from "../../services/new-comment-response.service";
import { CommentType } from "../../../comment-type.enum";

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.scss"]
})
export class CommentListComponent implements OnInit {
  @Input() postId: number;
  @Input() postType: number;
  @Input() userId: number;
  @Input() privilegedToDeleteRelatedEntries: boolean | never;
  commentsLoaded$: Observable<boolean>;
  comments$: Observable<CommentModel[]>;

  constructor(
    private store: Store<AppState>,
    private newCommentService: NewCommentService,
    private newCommentResponseService: NewCommentResponseService
  ) {}

  ngOnInit() {
    this.getComments();
  }

  activateResponseToPostTyping() {
    this.newCommentService.initData = { postId: this.postId };
  }

  activateResponseToCommentTyping(comment: CommentModel) {
    this.newCommentResponseService.commentType = CommentType.ResponseToComment;
    this.newCommentResponseService.initData = {
      postId: this.postId,
      authorData: comment.authorName + " " + comment.authorSurname,
      commentId: comment.id
    };
  }

  getComments() {
    this.commentsLoaded$ = this.store
      .select(e => e.postCommentsPanelComments.loaded)
      .pipe(distinctUntilChanged());
    this.comments$ = this.store.pipe(
      select(commentSelectors.selectCommentsByPostId, { postId: this.postId })
    );
    this.store.dispatch(
      new PostCommentActions.GetPostComments({ postId: this.postId })
    );
  }

  like(commentId: number) {
    this.store.dispatch(
      new PostCommentActions.Like({ commentId, postId: this.postId })
    );
  }

  unlike(commentId: number) {
    this.store.dispatch(
      new PostCommentActions.Unlike({ commentId, postId: this.postId })
    );
  }
}
