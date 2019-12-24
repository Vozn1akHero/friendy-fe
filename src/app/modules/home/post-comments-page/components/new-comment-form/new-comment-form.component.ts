import {Component, Input, OnInit, ViewChild} from '@angular/core';
import NewCommentModel from '../../models/new-comment.model';
import PostCommentService from '../../services/post-comment.service';
import {CommentResponseType} from '../../comment-response-type.enum';

@Component({
  selector: 'app-new-comment-form',
  templateUrl: './new-comment-form.component.html',
  styleUrls: ['./new-comment-form.component.scss']
})
export class NewCommentFormComponent implements OnInit {
  @ViewChild('image') image;
  @ViewChild('newMessageContent') newMessageContent;
  @Input() postId: number;
  chosenType: CommentResponseType;

  constructor(private postCommentService : PostCommentService) {
  }

  ngOnInit() {
  }

  onSubmit($event) {
    const newMessage: NewCommentModel =
      new NewCommentModel(this.postId, this.newMessageContent.nativeElement.value);
    this.postCommentService.addNew(newMessage);
  }
}
