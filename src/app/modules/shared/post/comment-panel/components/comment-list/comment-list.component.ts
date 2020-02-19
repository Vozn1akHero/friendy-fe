import {Component, Input, OnInit} from '@angular/core';
import CommentModel from '../../models/comment.model';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import * as PostCommentActions from '../../store/post-comment/post-comment.actions';
import * as commentSelectors from '../../store/selectors';
import {distinctUntilChanged} from 'rxjs/operators';
import {NewCommentOrResponseService} from '../../services/new-comment-or-response.service';
import {CommentType} from '../../../comment-type.enum';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() postId: number;
  @Input() postType: number;
  @Input() userId: number;
  @Input() privilegedToDeleteRelatedEntries: boolean|never;
  commentsLoaded$: Observable<boolean>;
  comments$: Observable<CommentModel[]>;

  constructor(private store: Store<AppState>,
              private newCommentOrResponseService : NewCommentOrResponseService) { }

  ngOnInit() {
    this.getComments();
  }

  activateResponseToPostTyping(){
    /*this.newCommentOrResponseService.responseTarget = {responseToComment: true,
      responseToResponse: false,
      target: {
        mainCommentId: commentId,
        responseId: null
      }};*/
    this.newCommentOrResponseService.commentType = CommentType.PostComment;
    this.newCommentOrResponseService.initData = {postId: this.postId};
  }

  activateResponseToCommentTyping(commentId: number){
    this.newCommentOrResponseService.commentType = CommentType.ResponseToComment;
    this.newCommentOrResponseService.initData = {postId: this.postId,
      commentId: commentId};
  }

  getComments(){
    this.commentsLoaded$ = this.store.select(e => e.postCommentsPanelComments.loaded)
      .pipe(distinctUntilChanged());
    this.comments$ = this.store.pipe(select(commentSelectors.selectCommentsByPostId,
      {postId: this.postId}));
    this.store.dispatch(new PostCommentActions.GetPostComments({postId: this.postId}));
  }

  like(commentId: number){
    this.store.dispatch(new PostCommentActions.Like({commentId, postId: this.postId}));
  }

  unlike(commentId: number){
    this.store.dispatch(new PostCommentActions.Unlike({commentId, postId: this.postId}));
  }
}
