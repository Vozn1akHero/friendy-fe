import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {StoreModule} from '@ngrx/store';
import {commentPanelReducerMap} from './comment-panel/store/reducers';
import {EffectsModule} from '@ngrx/effects';
import CommentResponseEffects from './comment-panel/store/comment-response/comment-response.effects';
import PostCommentEffects from './comment-panel/store/post-comment/post-comment.effects';
import {CommentPanelComponent} from './comment-panel/comment-panel.component';
import {CommentListComponent} from './comment-panel/components/comment-list/comment-list.component';
import {CommentItemComponent} from './comment-panel/components/comment-list/comment-item/comment-item.component';
import {CommentResponseItemComponent} from './comment-panel/components/comment-list/comment-response-list/comment-response-item/comment-response-item.component';
import {CommentResponseListComponent} from './comment-panel/components/comment-list/comment-response-list/comment-response-list.component';
import {NewCommentFormComponent} from './comment-panel/components/new-comment-form/new-comment-form.component';
import {PostItemComponent} from './post-item/post-item.component';
import {CommentPanelModule} from './comment-panel/comment-panel.module';
import {PostItemModule} from './post-item/post-item.module';

@NgModule({
  imports: [
    CommonModule,
    //ProfilePageRoutingModule,
    SharedModule,
    AppRoutingModule,
    /*StoreModule.forRoot(commentPanelReducerMap),
    EffectsModule.forRoot([
      CommentResponseEffects,
      PostCommentEffects
    ]),*/
    FormsModule,
    ReactiveFormsModule,
    CommentPanelModule,
    PostItemModule
  ],
  declarations: [

  ],
  exports: [
    CommentPanelModule,
    PostItemModule
  ]
})
export class PostModule {

}
