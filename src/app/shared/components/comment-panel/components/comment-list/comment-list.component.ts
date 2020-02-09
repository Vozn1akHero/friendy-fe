import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import CommentModel from '../../models/comment.model';
import {Observable, Subscription} from 'rxjs';
import PostCommentService from '../../services/post-comment.service';

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
    this.comments$ = this.postCommentService
      .comments$;
  }

  setCommentsLoaded(){
    this.commentsLoaded$ = this
      .postCommentService
      .commentsLoaded$;
  }
}
