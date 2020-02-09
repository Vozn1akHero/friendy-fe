import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import PostCommentService from './services/post-comment.service';
import CommentResponseService from './services/comment-response.service';

@Component({
  selector: 'app-comment-panel',
  templateUrl: './comment-panel.component.html',
  styleUrls: ['./comment-panel.component.scss'],
  providers: [PostCommentService,
    CommentResponseService]
})
export class CommentPanelComponent implements OnInit {
  @Input() postId: number;
  @Input() postType: number;

  constructor() { }

  ngOnInit() {
    //this.postId = this.route.snapshot.params.postId;
    this.setPostType();
  }

  setPostType(){
    if(window.location.href.indexOf("profile") !== -1){
      this.postType = 1;
    } else if(window.location.href.indexOf("event") !== -1){
      this.postType = 2;
    }
  }
}
