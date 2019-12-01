import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {AppRoutingModule} from '../../app-routing.module';
import {CommentListComponent} from './components/comment-list/comment-list.component';
import {CommentItemComponent} from './components/comment-list/comment-item/comment-item.component';
import {PostComponent} from './components/post/post.component';
import {PostCommentsSubpageComponent} from './post-comments-subpage.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    PostCommentsSubpageComponent,
    PostComponent,
    CommentItemComponent,
    CommentListComponent
  ],
  providers: []
})
export class PostCommentsSubpageModule {
}
