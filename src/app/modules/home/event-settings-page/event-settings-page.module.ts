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
import {IsEventCreatorResolver} from './resolvers/is-event-creator.resolver';
import { EventAdminsComponent } from './components/event-admins-settings/event-admins/event-admins.component';
import { EventAdminComponent } from './components/event-admins-settings/event-admins/event-admin/event-admin.component';
import { BannedUsersSettingsComponent } from './components/banned-users-settings/banned-users-settings.component';
import {BannedParticipantComponent} from './components/banned-users-settings/banned-participants/banned-participant/banned-participant.component';
import {BannedParticipantsComponent} from './components/banned-users-settings/banned-participants/banned-participants.component';
import {BannedParticipantsSearchComponent} from './components/banned-users-settings/banned-participants/banned-participants-search/banned-participants-search.component';
import { ParticipantsCommonListComponent } from './components/shared/participants-common-list/participants-common-list.component';
import { ParticipantComponent } from './components/shared/participants-common-list/participant/participant.component';
import { ParticipantsSearchComponent } from './components/shared/participants-common-list/participants-search/participants-search.component';
import { ParticipantListButtonComponent } from './components/shared/participants-common-list/participant-list-button/participant-list-button.component';


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
    EventParticipantsSearchComponent,
    EventAdminsComponent,
    EventAdminComponent,
    BannedUsersSettingsComponent,
    BannedParticipantComponent,
    BannedParticipantsComponent,
    BannedUsersSettingsComponent,
    BannedParticipantsSearchComponent,
    ParticipantsCommonListComponent,
    ParticipantComponent,
    ParticipantsSearchComponent,
    ParticipantListButtonComponent
  ],
  providers: [
    IsEventCreatorResolver
  ]
})
export class EventSettingsPageModule { }
