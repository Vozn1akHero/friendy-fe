import { ParticipantSmallItemComponent } from "./components/participants-modal/participant-small-item/participant-small-item.component";
import { ParticipantsModalComponent } from "./components/participants-modal/participants-modal.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../../../app-routing.module";

import { EventHeaderComponent } from "./components/event-header/event-header.component";
import { EventComponent } from "./event-page.component";
import { EventHeaderBgComponent } from "./components/event-header/event-header-bg/event-header-bg.component";
import { EventInfoPanelComponent } from "./components/event-header/event-info-panel/event-info-panel.component";
import { EventParticipantsComponent } from "./components/event-participants/event-participants.component";
import { EventPhotosComponent } from "./components/event-photos/event-photos.component";
import { EventNewPostComponent } from "./components/event-new-post/event-new-post.component";
import { EventAvatarComponent } from "./components/event-header/event-info-panel/event-avatar/event-avatar.component";
import { EventParticipantsItemComponent } from "./components/event-participants/event-participants-item/event-participants-item.component";
import { EventPhotosItemComponent } from "./components/event-photos/event-photos-item/event-photos-item.component";
import { EventHeaderBgAlterComponent } from "./components/event-header/event-header-bg/event-header-bg-alter/event-header-bg-alter.component";
import { EventPostListComponent } from "./components/event-post-list/event-post-list.component";
import { IsEventAdminResolver } from "./resolvers/is-event-admin.resolver";
import { ControlsComponent } from "./components/event-header/event-info-panel/controls/controls.component";
import { NonParticipantControlsComponent } from "./components/event-header/event-info-panel/controls/non-participant-controls/non-participant-controls.component";
import { ParticipantControlsComponent } from "./components/event-header/event-info-panel/controls/participant-controls/participant-controls.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PostModule } from "../../shared/post/post.module";
import { EventInfoSecComponent } from "./components/event-header/event-info-sec/event-info-sec.component";

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
    EventParticipantsComponent,
    EventPhotosComponent,
    EventNewPostComponent,
    EventAvatarComponent,
    EventParticipantsItemComponent,
    EventPhotosItemComponent,
    EventHeaderBgAlterComponent,
    EventHeaderComponent,
    EventPostListComponent,
    ControlsComponent,
    NonParticipantControlsComponent,
    ParticipantControlsComponent,
    ParticipantSmallItemComponent,
    ParticipantsModalComponent,
    EventInfoSecComponent
  ],
  entryComponents: [ParticipantsModalComponent],
  providers: [IsEventAdminResolver]
})
export class EventPageModule {}
