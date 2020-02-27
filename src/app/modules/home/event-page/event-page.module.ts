import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../../app-routing.module';

import { EventHeaderComponent } from './components/event-header/event-header.component';
import { EventComponent } from './event-page.component';
import { EventHeaderBgComponent } from './components/event-header/event-header-bg/event-header-bg.component';
import { EventInfoPanelComponent } from './components/event-header/event-info-panel/event-info-panel.component';
import { EventMainContentComponent } from './components/event-main-content/event-main-content.component';
import { EventParticipantsComponent } from './components/event-main-content/event-participants/event-participants.component';
import { EventPhotosComponent } from './components/event-main-content/event-photos/event-photos.component';
import { EventNewPostComponent } from './components/event-main-content/event-new-post/event-new-post.component';
import { EventAvatarComponent } from './components/event-header/event-info-panel/event-avatar/event-avatar.component';
import { EventParticipantsItemComponent } from './components/event-main-content/event-participants/event-participants-item/event-participants-item.component';
import { EventPhotosItemComponent } from './components/event-main-content/event-photos/event-photos-item/event-photos-item.component';
import { EventHeaderBgAlterComponent } from './components/event-header/event-header-bg/event-header-bg-alter/event-header-bg-alter.component';
import {EventPostListComponent} from './components/event-main-content/event-post-list/event-post-list.component';
import {IsEventAdminResolver} from './resolvers/is-event-admin.resolver';
import { EventParticipantsPageComponent } from '../event-participants-page/event-participants-page.component';
import {EventParticipantItemComponent} from '../event-participants-page/event-participant-item/event-participant-item.component';
import { ControlsComponent } from './components/event-header/event-info-panel/controls/controls.component';
import { NonParticipantControlsComponent } from './components/event-header/event-info-panel/controls/non-participant-controls/non-participant-controls.component';
import { ParticipantControlsComponent } from './components/event-header/event-info-panel/controls/participant-controls/participant-controls.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {PostModule} from '../../shared/post/post.module';

@NgModule({
  imports: [
    InfiniteScrollModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InfiniteScrollModule,
    PostModule
  ],
  declarations: [
    EventComponent,
    EventHeaderBgComponent,
    EventInfoPanelComponent,
    EventMainContentComponent,
    EventParticipantsComponent,
    EventPhotosComponent,
    EventNewPostComponent,
    EventAvatarComponent,
    EventParticipantsItemComponent,
    EventPhotosItemComponent,
    EventHeaderBgAlterComponent,
    EventHeaderComponent,
    EventPostListComponent,
    EventParticipantItemComponent,
    EventParticipantsPageComponent,
    ControlsComponent,
    NonParticipantControlsComponent,
    ParticipantControlsComponent
  ],
  providers: [
    IsEventAdminResolver
  ]
})
export class EventPageModule { }
