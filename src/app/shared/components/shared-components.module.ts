import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SearchInputComponent} from './search-input/search-input.component';
import {RowInSettingsPanelComponent} from './settings-panel/row-in-settings-panel/row-in-settings-panel.component';
import {SettingsPanelTextareaComponent} from './settings-panel/settings-panel-textarea/settings-panel-textarea.component';
import {LoaderComponent} from './loader/loader.component';
import {SettingsPanelWrapperComponent} from './settings-panel/settings-panel-wrapper/settings-panel-wrapper.component';
import {CalendarComponent} from './calendar/calendar.component';
import {MainPanelComponent} from './main-panel/main-panel.component';
import {ButtonHoverInfoModalComponent} from './button-hover-info-modal/button-hover-info-modal.component';
import {ControlsWrapperInSettingsPanelComponent} from './settings-panel/controls-wrapper-in-settings-panel/controls-wrapper-in-settings-panel.component';
import {SettingsPanelDropdownComponent} from './settings-panel/settings-panel-dropdown/settings-panel-dropdown.component';
import {PostItemComponent} from './post-item/post-item.component';
import {NewPostFormComponent} from './new-post-form/new-post-form.component';
import {MiniSearchInputComponent} from './mini-search-input/mini-search-input.component';
import {SettingsPanelInputComponent} from './settings-panel/settings-panel-input/settings-panel-input.component';
import {SettingsPanelSelectComponent} from './settings-panel/settings-panel-select/settings-panel-select.component';
import {RowContentInSettingsPanelComponent} from './settings-panel/row-content-in-settings-panel/row-content-in-settings-panel.component';
import {SettingsPanelFormComponent} from './settings-panel/settings-panel-form/settings-panel-form.component';
import {ScrollableListComponent} from './scrollable-list/scrollable-list.component';
import {PanelForEntryPresentingComponent} from './panel-for-entry-presenting/panel-for-entry-presenting.component';
import {InfoModalComponent} from './info-modal/info-modal.component';
import {CommonModalComponent} from './common-modal/common-modal.component';
import {TransparentBgModalComponent} from './transparent-bg-modal/transparent-bg-modal.component';
import {RouterModule} from '@angular/router';
import {CommentPanelComponent} from './comment-panel/comment-panel.component';
import {CommentListComponent} from './comment-panel/components/comment-list/comment-list.component';
import {CommentItemComponent} from './comment-panel/components/comment-list/comment-item/comment-item.component';
import {CommentResponseItemComponent} from './comment-panel/components/comment-list/comment-response-list/comment-response-item/comment-response-item.component';
import {CommentResponseListComponent} from './comment-panel/components/comment-list/comment-response-list/comment-response-list.component';
import {NewCommentFormComponent} from './comment-panel/components/new-comment-form/new-comment-form.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CommentPanelComponent,
    CommentListComponent,
    CommentItemComponent,
    CommentResponseItemComponent,
    CommentResponseListComponent,
    NewCommentFormComponent,
    NewPostFormComponent,
    SearchInputComponent,
    MiniSearchInputComponent,
    MainPanelComponent,
    CommonModalComponent,
    ButtonHoverInfoModalComponent,
    TransparentBgModalComponent,
    CalendarComponent,
    InfoModalComponent,
    ScrollableListComponent,
    SettingsPanelWrapperComponent,
    ControlsWrapperInSettingsPanelComponent,
    RowInSettingsPanelComponent,
    RowContentInSettingsPanelComponent,
    SettingsPanelInputComponent,
    SettingsPanelFormComponent,
    SettingsPanelTextareaComponent,
    SettingsPanelDropdownComponent,
    SettingsPanelSelectComponent,
    PanelForEntryPresentingComponent,
    LoaderComponent,
    PostItemComponent
  ],
  exports: [
    NewPostFormComponent,
    SearchInputComponent,
    MiniSearchInputComponent,
    MainPanelComponent,
    CommonModalComponent,
    ButtonHoverInfoModalComponent,
    TransparentBgModalComponent,
    CalendarComponent,
    InfoModalComponent,
    ScrollableListComponent,
    SettingsPanelWrapperComponent,
    ControlsWrapperInSettingsPanelComponent,
    RowInSettingsPanelComponent,
    RowContentInSettingsPanelComponent,
    SettingsPanelInputComponent,
    SettingsPanelFormComponent,
    SettingsPanelTextareaComponent,
    SettingsPanelDropdownComponent,
    SettingsPanelSelectComponent,
    PanelForEntryPresentingComponent,
    LoaderComponent,
    PostItemComponent
  ]
})


export class SharedComponentsModule { }
