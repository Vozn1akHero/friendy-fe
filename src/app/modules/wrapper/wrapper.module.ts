import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WrapperComponent} from './wrapper.component';
import { AppRoutingModule } from '../../app-routing.module';
import {LayoutModule} from '../../layout/layout.module';
import { FriendRequestsModalComponent } from './components/friend-requests-modal/friend-requests-modal.component';
import { ReceivedFriendRequestListComponent } from './components/friend-requests-modal/components/received-friend-request-list/received-friend-request-list.component';
import { ReceivedFriendRequestItemComponent } from './components/friend-requests-modal/components/received-friend-request-list/received-friend-request-item/received-friend-request-item.component';
import {FriendRequestsModalService} from './services/friend-requests-modal.service';
import { SentFriendRequestListComponent } from './components/friend-requests-modal/components/sent-friend-request-list/sent-friend-request-list.component';
import {SentFriendRequestItemComponent} from './components/friend-requests-modal/components/sent-friend-request-list/sent-friend-request-item/sent-friend-request-item.component';
import {ProfileIdResolver} from './resolvers/profile-id.resolver';
import {FriendRequestItemComponent} from './components/friend-requests-modal/components/friend-request-item/friend-request-item.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [
    WrapperComponent,
    FriendRequestsModalComponent,
    ReceivedFriendRequestListComponent,
    ReceivedFriendRequestItemComponent,
    FriendRequestItemComponent,
    SentFriendRequestListComponent,
    SentFriendRequestItemComponent
  ],
  providers: [
    FriendRequestsModalService,
    ProfileIdResolver
  ]
})


export class WrapperModule { }
