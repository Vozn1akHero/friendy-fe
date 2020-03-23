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
import {IsEventCreatorResolver} from './resolvers/is-event-creator.resolver';
import { BannedUsersSettingsComponent } from './components/banned-users-settings/banned-users-settings.component';
import { ParticipantsCommonListComponent } from './components/shared/participants-common-list/participants-common-list.component';
import { ParticipantComponent } from './components/shared/participants-common-list/participant/participant.component';
import { ParticipantsSearchComponent } from './components/shared/participants-common-list/participants-search/participants-search.component';
import { ParticipantListButtonComponent } from './components/shared/participants-common-list/participant-list-button/participant-list-button.component';
import {EventAdminsService} from './services/event-admins.service';
import {EventCreationService} from '../events-page/services/event-creation.service';
import {EventDataService} from './services/event-data.service';
import {EventParticipantService} from './services/event-participant.service';
import { ParticipantRequestsSettingsComponent } from './components/participant-requests-settings/participant-requests-settings.component';
import {EventParticipationRequestService} from './services/event-participation-request.service';
import { ParticipantsModalComponent } from './components/event-admins-settings/participants-modal/participants-modal.component';
import { ParticipantSmallItemComponent } from './components/event-admins-settings/participants-modal/participant-small-item/participant-small-item.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { ParticipantSettingsNavComponent } from './components/event-participants-settings/participant-settings-nav/participant-settings-nav.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  declarations: [
    EventSettingsPageComponent,
    EventSettingsNavComponent,
    BasicEventSettingsComponent,
    EventParticipantsSettingsComponent,
    EventAdminsSettingsComponent,
    ChosenEventSettingsSubpageComponent,
    BannedUsersSettingsComponent,
    BannedUsersSettingsComponent,
    ParticipantsCommonListComponent,
    ParticipantComponent,
    ParticipantsSearchComponent,
    ParticipantListButtonComponent,
    ParticipantRequestsSettingsComponent,
    ParticipantsModalComponent,
    ParticipantSmallItemComponent,
    ParticipantSettingsNavComponent
  ],
  providers: [
    IsEventCreatorResolver,
    EventAdminsService,
    EventCreationService,
    EventDataService,
    EventParticipationRequestService,
    EventParticipantService
  ]
})
export class EventSettingsPageModule { }
