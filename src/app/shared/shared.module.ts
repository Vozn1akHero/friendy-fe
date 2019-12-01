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
import { CommonModalComponent } from './components/common-modal/common-modal.component';
import { ButtonHoverInfoModalComponent } from './components/button-hover-info-modal/button-hover-info-modal.component';
import { TransparentBgModalComponent } from './components/transparent-bg-modal/transparent-bg-modal.component';
import { CalendarComponent } from './components/calendar/calendar.component';


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
    NewCommentFormComponent,
    CommonModalComponent,
    ButtonHoverInfoModalComponent,
    TransparentBgModalComponent,
    CalendarComponent,
  ],
  exports: [
    NewMessageFormComponent,
    CommentsComponent,
    SearchInputComponent,
    MiniSearchInputComponent,
    MainPanelComponent,
    NewCommentFormComponent,
    CommonModalComponent,
    ButtonHoverInfoModalComponent,
    TransparentBgModalComponent,
    CalendarComponent,
  ]
})


export class SharedModule { }
