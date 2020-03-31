import { Component, Input, OnInit } from "@angular/core";
import PostCommentService from "./services/post-comment.service";
import CommentResponseService from "./services/comment-response.service";
import { NewCommentService } from "./services/new-comment.service";
import { UserIdService } from "../../../../shared/services/user-id.service";
import { NewCommentResponseService } from "./services/new-comment-response.service";

@Component({
  selector: "app-comment-panel",
  templateUrl: "./comment-panel.component.html",
  styleUrls: ["./comment-panel.component.scss"],
  providers: [
    CommentResponseService,
    PostCommentService,
    NewCommentService,
    NewCommentResponseService
  ]
})
export class CommentPanelComponent implements OnInit {
  @Input() postId: number;
  userId: number;
  @Input() privilegedToDeleteRelatedEntries: boolean | never;
  postType: number;

  constructor(private userIdService: UserIdService) {
    this.userId = this.userIdService.userIdValue;
  }

  ngOnInit() {
    this.setPostType();
  }

  setPostType() {
    if (window.location.href.indexOf("profile") !== -1) {
      this.postType = 1;
    } else if (window.location.href.indexOf("event") !== -1) {
      this.postType = 2;
    }
  }
}
