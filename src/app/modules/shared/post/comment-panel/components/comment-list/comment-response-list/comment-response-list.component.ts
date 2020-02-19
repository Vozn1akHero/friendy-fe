import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {Observable, Subscription} from 'rxjs';
import SubscriptionManager from '../../../../../../../shared/helpers/SubscriptionManager';
import CommentResponseModel from '../../../models/comment-response.model';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import * as CommentResponseActions from '../../../store/comment-response/comment-response.actions';
import * as commentSelectors from '../../../store/selectors';
import {NewCommentOrResponseService} from '../../../services/new-comment-or-response.service';
import * as PostCommentActions from '../../../store/post-comment/post-comment.actions';
import {CommentType} from '../../../../comment-type.enum';

@Component({
  selector: 'app-comment-response-list',
  templateUrl: './comment-response-list.component.html',
  styleUrls: ['./comment-response-list.component.scss']
})
export class CommentResponseListComponent implements OnInit, OnDestroy {
  @Input() commentId: number;
  @Input() postId: number;
  @Input() userId: number;
  @Input() privilegedToDeleteRelatedEntries: boolean|never;
  commentResponses$: Observable<CommentResponseModel[]>;
  loaded$: Observable<boolean>;

  constructor(private subscriptionManager: SubscriptionManager,
              private newCommentOrResponseService : NewCommentOrResponseService,
              private store: Store<AppState>) {}

  ngOnInit() {
    this.getCommentResponses();
  }

  activateResponseToResponseTyping(responseId: number){
    this.newCommentOrResponseService.commentType = CommentType.ResponseToCommentResponse;
    this.newCommentOrResponseService.initData = {
      postId: this.postId, commentId: this.commentId, responseToCommentId: responseId
    };
  }

  getCommentResponses() {
    this.loaded$ = this.store.select(e => e.postCommentsPanelCommentResponses.loaded);
    this.commentResponses$ = this.store.pipe(select(commentSelectors.selectCommentResponsesByCommentId, {commentId: this.commentId}));
    this.store.dispatch(new CommentResponseActions.GetCommentResponses({commentId: this.commentId}));
  }

  like(commentResponseId: number){
    this.store.dispatch(new CommentResponseActions.Like({parentCommentId: this.commentId, id: commentResponseId}));
  }

  unlike(commentResponseId: number){
    this.store.dispatch(new CommentResponseActions.Unlike({parentCommentId: this.commentId, id: commentResponseId}));
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
