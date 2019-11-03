import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from './components/chat-message-list/chat-message-list.component';
import { NewMessageInDialogFormComponent } from './components/new-message-in-dialog-form/new-message-in-dialog-form.component';
import { ChatFriendDataComponent } from './components/chat-friend-data/chat-friend-data.component';
import { ChatsInDialogPanelComponent } from './components/chats-in-dialog-panel/chats-in-dialog-panel.component';


import { FriendMessagesComponent } from './components/chat-message-list/friend-messages/friend-messages.component';
import { UserMessagesComponent } from './components/chat-message-list/user-messages/user-messages.component';
import { ChatMessageItemComponent } from './components/chat-message-list/chat-message-item/chat-message-item.component';
import { ChatsInDialogItemComponent } from './components/chats-in-dialog-panel/chats-in-dialog-item/chats-in-dialog-item.component';
import { DialogPageComponent } from './dialog-page.component';

import { SharedModule } from '../../../shared/shared.module';
import { AppRoutingModule } from '../../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InterlocutorDataResolver} from './resolvers/interlocutor-data.resolver';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DialogPageComponent,
    MessagesComponent,
    NewMessageInDialogFormComponent,
    ChatFriendDataComponent,
    ChatsInDialogPanelComponent,
    FriendMessagesComponent,
    UserMessagesComponent,
    ChatMessageItemComponent,
    ChatsInDialogItemComponent
  ],
  providers: [
    InterlocutorDataResolver
  ]
})


export class DialogPageModule { }