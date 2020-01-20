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
  ]
})


export class SharedModule { }
