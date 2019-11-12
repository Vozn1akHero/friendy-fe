import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Form, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import * as UserPostsActions from '../../store/user-posts/user-posts.actions';
import NewPost from '../../models/new-post.model';

@Component({
  selector: 'app-profile-new-post',
  templateUrl: './profile-new-post.component.html',
  styleUrls: ['./profile-new-post.component.scss']
})
export class ProfileNewPostComponent implements OnInit {
  @Output() newPostEvent : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @ViewChild('image') image;
  @ViewChild('newMessageContent') newMessageContent;
  @Input() isUserProfileOwner : boolean;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSubmit($event) {
    $event.preventDefault();
    const image = this.image.nativeElement;
    if(image.files && image.files[0]){
      const newMessage: NewPost =
        new NewPost(this.newMessageContent.nativeElement.value, image.files[0]);
      this.store.dispatch(new UserPostsActions.AddPost(newMessage))
    } else {
      const newMessage: NewPost =
        new NewPost(this.newMessageContent.nativeElement.value, null);
      this.store.dispatch(new UserPostsActions.AddPost(newMessage))
    }
  }
}
