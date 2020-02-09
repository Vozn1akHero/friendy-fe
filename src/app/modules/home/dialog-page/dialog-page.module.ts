import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from './components/chat-message-list/chat-message-list.component';
import { NewMessageInDialogFormComponent } from './components/new-message-in-dialog-form/new-message-in-dialog-form.component';
import { ChatFriendDataComponent } from './components/chat-friend-data/chat-friend-data.component';
import { ChatsInDialogPanelComponent } from './components/chats-in-dialog-panel/chats-in-dialog-panel.component';
import { ChatMessageItemComponent } from './components/chat-message-list/chat-message-item/chat-message-item.component';
import { ChatsInDialogItemComponent } from './components/chats-in-dialog-panel/chats-in-dialog-item/chats-in-dialog-item.component';
import { DialogPageComponent } from './dialog-page.component';

import { SharedModule } from '../../../shared/shared.module';
import { AppRoutingModule } from '../../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InterlocutorDataResolver} from './resolvers/interlocutor-data.resolver';
import {ChatDataResolver} from './resolvers/chat-data.resolver';
import {ScrollableListNotifierService} from "../../../shared/services/scrollable-list-notifier.service";
import {InfiniteScrollModule} from "ngx-infinite-scroll";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  declarations: [
    DialogPageComponent,
    MessagesComponent,
    NewMessageInDialogFormComponent,
    ChatFriendDataComponent,
    ChatsInDialogPanelComponent,
    ChatMessageItemComponent,
    ChatsInDialogItemComponent
  ],
  providers: [
    InterlocutorDataResolver,
    ChatDataResolver
  ]
})


export class DialogPageModule { }
