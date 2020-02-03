import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { NewMessageFormComponent } from './components/new-message-form/new-message-form.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MiniSearchInputComponent } from './components/mini-search-input/mini-search-input.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { CommonModalComponent } from './components/common-modal/common-modal.component';
import { ButtonHoverInfoModalComponent } from './components/button-hover-info-modal/button-hover-info-modal.component';
import { TransparentBgModalComponent } from './components/transparent-bg-modal/transparent-bg-modal.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { ScrollableListComponent } from './components/scrollable-list/scrollable-list.component';
import { SettingsPanelWrapperComponent } from './components/settings-panel/settings-panel-wrapper/settings-panel-wrapper.component';
import {ControlsWrapperInSettingsPanelComponent} from "./components/settings-panel/controls-wrapper-in-settings-panel/controls-wrapper-in-settings-panel.component";
import {RowInSettingsPanelComponent} from "./components/settings-panel/row-in-settings-panel/row-in-settings-panel.component";
import {RowContentInSettingsPanelComponent} from "./components/settings-panel/row-content-in-settings-panel/row-content-in-settings-panel.component";
import {SettingsPanelInputComponent} from "./components/settings-panel/settings-panel-input/settings-panel-input.component";
import { SettingsPanelFormComponent } from './components/settings-panel/settings-panel-form/settings-panel-form.component';
import {SettingsPanelTextareaComponent} from "./components/settings-panel/settings-panel-textarea/settings-panel-textarea.component";
import {SettingsPanelDropdownComponent} from "./components/settings-panel/settings-panel-dropdown/settings-panel-dropdown.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    NewMessageFormComponent,
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
    SettingsPanelDropdownComponent
  ],
  exports: [
    NewMessageFormComponent,
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
    SettingsPanelDropdownComponent
  ]
})


export class SharedModule { }
