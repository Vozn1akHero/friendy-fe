import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../../app-routing.module';
import {EventSettingsPageComponent} from './event-settings-page.component';
import { EventSettingsNavComponent } from './components/event-settings-nav/event-settings-nav.component';
import { BasicEventSettingsComponent } from './components/basic-event-settings/basic-event-settings.component';
import { EventParticipantsSettingsComponent } from './components/event-participants-settings/event-participants-settings.component';
import { EventAdminsSettingsComponent } from './components/event-admins-settings/event-admins-settings.component';
import { ChosenEventSettingsSubpageComponent } from './components/chosen-event-settings-subpage/chosen-event-settings-subpage.component';
import { EventParticipantsComponent } from './components/event-participants-settings/event-participants/event-participants.component';
import { EventParticipantComponent } from './components/event-participants-settings/event-participants/event-participant/event-participant.component';
import { EventParticipantsSearchComponent } from './components/event-participants-settings/event-participants/event-participants-search/event-participants-search.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    EventSettingsPageComponent,
    EventSettingsNavComponent,
    BasicEventSettingsComponent,
    EventParticipantsSettingsComponent,
    EventAdminsSettingsComponent,
    ChosenEventSettingsSubpageComponent,
    EventParticipantsComponent,
    EventParticipantComponent,
    EventParticipantsSearchComponent
  ],
  exports: []
})
export class EventSettingsPageModule { }