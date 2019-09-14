import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { NewMessageFormComponent } from './components/new-message-form/new-message-form.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MiniSearchInputComponent } from './components/mini-search-input/mini-search-input.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { NewCommentFormComponent } from './components/comments/new-comment-form/new-comment-form.component';
import {ProfilePageModule} from '../modules/home/profile-page/profile-page.module';
import {ModulesModule} from '../modules/modules.module';
import {ImageService} from './services/image.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    NewMessageFormComponent,
    CommentsComponent,
    SearchInputComponent,
    MiniSearchInputComponent,
    MainPanelComponent,
    NewCommentFormComponent
  ],
  exports: [
    NewMessageFormComponent,
    CommentsComponent,
    SearchInputComponent,
    MiniSearchInputComponent,
    MainPanelComponent,
    NewCommentFormComponent
  ]
})


export class SharedModule { }
