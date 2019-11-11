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
import { EventAvatarComponent } from './components/event-header/event-avatar/event-avatar.component';
import { EventPostItemComponent } from './components/event-main-content/event-post-list/event-post-item/event-post-item.component';
import { EventParticipantsItemComponent } from './components/event-main-content/event-participants/event-participants-item/event-participants-item.component';
import { EventPhotosItemComponent } from './components/event-main-content/event-photos/event-photos-item/event-photos-item.component';
import { EventHeaderBgAlterComponent } from './components/event-header/event-header-bg/event-header-bg-alter/event-header-bg-alter.component';
import {EventPostListComponent} from './components/event-main-content/event-post-list/event-post-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
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
    EventPostItemComponent,
    EventParticipantsItemComponent,
    EventPhotosItemComponent,
    EventHeaderBgAlterComponent,
    EventHeaderComponent,
    EventPostListComponent
  ],
  exports: []
})
export class EventPageModule { }
