import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import NewCommentModel from '../../models/new-comment.model';
import autosize from 'autosize';
import {NewCommentOrResponseService} from '../../services/new-comment-or-response.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import * as CommentResponseActions from '../../store/comment-response/comment-response.actions';
import * as PostCommentActions from '../../store/post-comment/post-comment.actions';
import {NewCommentResponseModel} from '../../models/new-comment-response.model';

@Component({
  selector: 'app-new-comment-form',
  templateUrl: './new-comment-form.component.html',
  styleUrls: ['./new-comment-form.component.scss']
})
export class NewCommentFormComponent implements OnInit {
  @ViewChild('image') image;
  @ViewChild('textAreaElement') textAreaElement: ElementRef;
  @Input() postId: number;

  constructor(private store: Store<AppState>,
              private newCommentOrResponseService : NewCommentOrResponseService) {}

  ngOnInit() {
    autosize(this.textAreaElement.nativeElement);
  }

  onSubmit() {
    const content = this.textAreaElement.nativeElement.value;
    const image = this.image.nativeElement.files[0];
    if(this.newCommentOrResponseService.responseTarget.responseToComment){
      const newComment : NewCommentResponseModel = new NewCommentResponseModel(this.postId,
        this.newCommentOrResponseService.responseTarget.targetId, content, image);
      this.store.dispatch(new CommentResponseActions.Create(newComment));
    } else if(this.newCommentOrResponseService.responseTarget.responseToComment){

    }
    else{
      const newComment: NewCommentModel =
        new NewCommentModel(this.postId, this.textAreaElement.nativeElement.value);
      this.store.dispatch(new PostCommentActions.Create(newComment));
    }
  }
}
