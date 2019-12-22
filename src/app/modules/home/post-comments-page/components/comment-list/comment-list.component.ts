import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import CommentModel from '../../models/comment.model';
import {Observable, Subscription} from 'rxjs';
import PostCommentsService from '../../services/post-comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit, OnDestroy {
  @Input() postId: number;
  @Input() postType: number;

  commentsLoaded$: Observable<boolean>;
  commentsLoaded: boolean = false;
  //comments$: Observable<CommentModel[]>;
  comments: CommentModel[];
  commentsSubscription: Subscription;

  constructor(private postCommentsService : PostCommentsService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(){
    this.commentsLoaded$ = this.postCommentsService.commentsLoaded$;
    //this.comments$ = this.postCommentsService.getRange(this.postId, 0, 10);
    this.commentsSubscription = this.postCommentsService.getRange(this.postId, 0, 10).subscribe(value => {
      this.comments = value;
      //console.log(this.comments)
      //this.commentsLoaded = true;
    })
  }

  ngOnDestroy(): void {
    this.commentsSubscription.unsubscribe();
  }
}
