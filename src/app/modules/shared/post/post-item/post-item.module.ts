import {NgModule} from '@angular/core';
import {PostItemComponent} from './post-item.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommentPanelModule} from '../comment-panel/comment-panel.module';

@NgModule({
  imports: [CommonModule,
    CommentPanelModule,
    FormsModule,
    ReactiveFormsModule],
  declarations: [
    PostItemComponent],
  exports: [
    PostItemComponent]
})
export class PostItemModule {

}
