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
import {ButtonHoverInfoPopoverComponent} from './button-hover-info-popover/button-hover-info-popover.component';
import {ControlsWrapperInSettingsPanelComponent} from './settings-panel/controls-wrapper-in-settings-panel/controls-wrapper-in-settings-panel.component';
import {SettingsPanelDropdownComponent} from './settings-panel/settings-panel-dropdown/settings-panel-dropdown.component';
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
import { MiniLoaderComponent } from './mini-loader/mini-loader.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewPostFormComponent,
    SearchInputComponent,
    MiniSearchInputComponent,
    MainPanelComponent,
    CommonModalComponent,
    ButtonHoverInfoPopoverComponent,
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
    MiniLoaderComponent
  ],
  exports: [
    NewPostFormComponent,
    SearchInputComponent,
    MiniSearchInputComponent,
    MainPanelComponent,
    CommonModalComponent,
    ButtonHoverInfoPopoverComponent,
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
    MiniLoaderComponent
  ],
  entryComponents: [
    ButtonHoverInfoPopoverComponent
  ]
})


export class SharedComponentsModule { }
