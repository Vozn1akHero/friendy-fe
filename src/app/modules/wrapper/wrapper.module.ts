import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WrapperComponent} from './wrapper.component';
import { AppRoutingModule } from '../../app-routing.module';
import {NavigationComponent} from '../../layout/navigation/navigation.component';
import {LayoutModule} from '../../layout/layout.module';
import { FriendRequestsModalComponent } from './components/friend-requests-modal/friend-requests-modal.component';
import { FriendRequestListComponent } from './components/friend-request-list/friend-request-list.component';
import { FriendRequestItemComponent } from './components/friend-request-list/friend-request-item/friend-request-item.component';
import {FriendRequestsService} from './services/friend-requests.service';
import { SentFriendRequestListComponent } from './components/sent-friend-request-list/sent-friend-request-list.component';

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
    FriendRequestListComponent,
    FriendRequestItemComponent,
    SentFriendRequestListComponent
  ],
  providers: [
    FriendRequestsService
  ]
})


export class WrapperModule { }
