import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import CommentModel from '../../models/comment.model';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import * as PostCommentActions from '../../store/post-comment/post-comment.actions';
import * as commentSelectors from '../../store/selectors'
import {distinctUntilChanged, filter, takeUntil} from 'rxjs/operators';
import {NewCommentOrResponseService} from '../../services/new-comment-or-response.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() postId: number;
  @Input() postType: number;
  commentsLoaded$: Observable<boolean>;
  comments$: Observable<CommentModel[]>;

  constructor(private store: Store<AppState>,
              private newCommentOrResponseService : NewCommentOrResponseService) { }

  ngOnInit() {
    this.getComments();
  }

  activateResponseToPostTyping(commentId: number){
    this.newCommentOrResponseService.responseTarget = {responseToComment: true,
      responseToResponse: false,
      targetId: commentId};
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
