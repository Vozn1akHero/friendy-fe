import {InjectionToken, NgModule} from '@angular/core';
import {CommentPanelComponent} from './comment-panel.component';
import {CommentItemComponent} from './components/comment-list/comment-item/comment-item.component';
import {NewCommentFormComponent} from './components/new-comment-form/new-comment-form.component';
import {CommentResponseListComponent} from './components/comment-list/comment-response-list/comment-response-list.component';
import {CommentResponseItemComponent} from './components/comment-list/comment-response-list/comment-response-item/comment-response-item.component';
import {CommentListComponent} from './components/comment-list/comment-list.component';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {commentPanelReducerMap} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import CommentResponseEffects from './store/comment-response/comment-response.effects';
import PostCommentEffects from './store/post-comment/post-comment.effects';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';
import {AppRoutingModule} from '../../../../app-routing.module';
import CommentResponseService from './services/comment-response.service';
import PostCommentService from './services/post-comment.service';
import {AppState} from './store/reducers';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //ProfilePageRoutingModule,
    SharedModule,
    AppRoutingModule,
    /*StoreModule.forRoot(commentPanelReducerMap, {}),
    EffectsModule.forFeature([
      CommentResponseEffects,
      PostCommentEffects
    ])*/
  ],
  declarations: [
    CommentPanelComponent,
    CommentListComponent,
    CommentItemComponent,
    CommentResponseItemComponent,
    CommentResponseListComponent,
    NewCommentFormComponent
  ],
  exports: [
    CommentPanelComponent,
    CommentListComponent,
    CommentItemComponent,
    CommentResponseItemComponent,
    CommentResponseListComponent,
    NewCommentFormComponent
  ],
  providers: [
    CommentResponseService,
    PostCommentService
  ]
})
export class CommentPanelModule {

}
