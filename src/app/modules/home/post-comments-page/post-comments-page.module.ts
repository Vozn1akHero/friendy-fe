import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {CommentListComponent} from './components/comment-list/comment-list.component';
import {CommentItemComponent} from './components/comment-list/comment-item/comment-item.component';
import {UserPostComponent} from './components/user-post/user-post.component';
import {PostCommentsPageComponent} from './post-comments-page.component';
import { NewCommentFormComponent } from './components/new-comment-form/new-comment-form.component';
import {EventPostComponent} from './components/event-post/event-post.component';
import { CommentResponseListComponent } from './components/comment-list/comment-response-list/comment-response-list.component';
import { CommentResponseItemComponent } from './components/comment-list/comment-response-list/comment-response-item/comment-response-item.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    PostCommentsPageComponent,
    UserPostComponent,
    EventPostComponent,
    CommentItemComponent,
    CommentListComponent,
    NewCommentFormComponent,
    CommentResponseListComponent,
    CommentResponseItemComponent
  ],
  providers: []
})
export class PostCommentsPageModule {
}
