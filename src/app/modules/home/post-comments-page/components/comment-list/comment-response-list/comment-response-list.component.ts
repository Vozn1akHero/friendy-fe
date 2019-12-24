import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import CommentResponseService from '../../../services/comment-response.service';
import {Subscription} from 'rxjs';
import SubscriptionManager from '../../../../../../shared/helpers/SubscriptionManager';
import CommentResponseModel from '../../../models/comment-response.model';

@Component({
  selector: 'app-comment-response-list',
  templateUrl: './comment-response-list.component.html',
  styleUrls: ['./comment-response-list.component.scss']
})
export class CommentResponseListComponent implements OnInit, OnDestroy {
  @Input() commentId : number;
  commentResponses: CommentResponseModel[];
  loaded: boolean = false;

  constructor(private subscriptionManager: SubscriptionManager,
              private commentResponseService : CommentResponseService) { }

  ngOnInit() {
    this.getCommentResponses();
    this.setCommentResponses();
  }

  getCommentResponses(){
    this.subscriptionManager.add(this.commentResponseService.getAllByCommentId(this.commentId).subscribe());
  }

  setCommentResponses(){
    this.subscriptionManager.add(this.commentResponseService
      .commentResponses$
      .subscribe(value => {
        this.commentResponses = value;
        this.loaded = true;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
