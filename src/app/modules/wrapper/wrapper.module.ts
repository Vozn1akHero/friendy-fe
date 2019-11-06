import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WrapperComponent} from './wrapper.component';
import { AppRoutingModule } from '../../app-routing.module';
import {LayoutModule} from '../../layout/layout.module';
import { FriendRequestsModalComponent } from './components/friend-requests-modal/friend-requests-modal.component';
import { ReceivedFriendRequestListComponent } from './components/received-friend-request-list/received-friend-request-list.component';
import { ReceivedFriendRequestItemComponent } from './components/received-friend-request-list/received-friend-request-item/received-friend-request-item.component';
import {FriendRequestsService} from './services/friend-requests.service';
import { SentFriendRequestListComponent } from './components/sent-friend-request-list/sent-friend-request-list.component';
import {SentFriendRequestItemComponent} from './components/sent-friend-request-list/sent-friend-request-item/sent-friend-request-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule
  ],
  declarations: [
    WrapperComponent,
    FriendRequestsModalComponent,
    ReceivedFriendRequestListComponent,
    ReceivedFriendRequestItemComponent,
    SentFriendRequestListComponent,
    SentFriendRequestItemComponent
  ],
  providers: [
    FriendRequestsService
  ]
})


export class WrapperModule { }
