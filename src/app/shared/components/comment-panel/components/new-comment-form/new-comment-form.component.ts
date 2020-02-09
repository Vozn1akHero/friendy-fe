import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import NewCommentModel from '../../models/new-comment.model';
import PostCommentService from '../../services/post-comment.service';
import autosize from 'autosize';

@Component({
  selector: 'app-new-comment-form',
  templateUrl: './new-comment-form.component.html',
  styleUrls: ['./new-comment-form.component.scss']
})
export class NewCommentFormComponent implements OnInit {
  @ViewChild('image') image;
  @ViewChild('textAreaElement') textAreaElement: ElementRef;
  @Input() postId: number;

  constructor(private postCommentService : PostCommentService) {
  }

  ngOnInit() {
    autosize(this.textAreaElement.nativeElement);
  }

  onSubmit($event) {
    const newMessage: NewCommentModel =
      new NewCommentModel(this.postId, this.textAreaElement.nativeElement.value);
    this.postCommentService.addNew(newMessage);
  }
}
