import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './components/message/message.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ChatComponent } from './components/dialog/chat/chat.component';
import { NewMessageComponent } from './components/dialog/new-message/new-message.component';
import { ChatFriendDataComponent } from './components/dialog/chat-friend-data/chat-friend-data.component';
import { ChatsInDialogComponent } from './components/dialog/chats-in-dialog/chats-in-dialog.component';
import { SortMessagesPanelComponent } from './components/sort-messages-panel/sort-messages-panel.component';
import { NewMessagePanelComponent } from './components/new-message-panel/new-message-panel.component';
import { FriendMessagesComponent } from './components/dialog/chat/friend-messages/friend-messages.component';
import { UserMessagesComponent } from './components/dialog/chat/user-messages/user-messages.component';
import { MessageInChatComponent } from './components/dialog/chat/message-in-chat/message-in-chat.component';
import { FriendInChatsInDialogComponent } from './components/dialog/chats-in-dialog/friend-in-chats-in-dialog/friend-in-chats-in-dialog.component';
import { MessagesPageComponent } from './messages-page.component';

import { SharedModule } from '../../../shared/shared.module';
import { AppRoutingModule } from '../../../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    MessageComponent,
    DialogComponent,
    ChatComponent,
    NewMessageComponent,
    ChatFriendDataComponent,
    ChatsInDialogComponent,
    SortMessagesPanelComponent,
    NewMessagePanelComponent,
    MessagesPageComponent,
    FriendMessagesComponent,
    UserMessagesComponent,
    MessageInChatComponent,
    FriendInChatsInDialogComponent
  ]
})


export class MessagesPageModule { }
