import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import CommentModel from '../../models/comment.model';
import {Observable, Subscription} from 'rxjs';
import PostCommentService from '../../services/post-comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit, OnDestroy {
  @Input() postId: number;
  @Input() postType: number;

  commentsLoaded: boolean;
  comments: CommentModel[];
  commentsSubscription: Subscription;
  commentsLoadedSubscription: Subscription;

  constructor(private postCommentService : PostCommentService) { }

  ngOnInit() {
    this.setCommentsLoaded();
    this.getComments();
    this.setComments();
  }

  getComments(){
    this.postCommentService.getRange(this.postId).subscribe();
  }

  setComments(){
    this.commentsSubscription = this.postCommentService.comments$.subscribe(value => {
      this.comments = value;
    })
  }

  setCommentsLoaded(){
    this.commentsLoadedSubscription = this.postCommentService.commentsLoaded$.subscribe(value => {
      this.commentsLoaded = value;
    })
  }

  ngOnDestroy(): void {
    this.commentsSubscription.unsubscribe();
  }
}
