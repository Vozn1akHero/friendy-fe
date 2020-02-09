import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './components/message/message.component';
import { SortMessagesPanelComponent } from './components/sort-messages-panel/sort-messages-panel.component';
import { NewMessagePanelComponent } from './components/new-message-panel/new-message-panel.component';
import { MessagesPageComponent } from './messages-page.component';

import { SharedModule } from '../../../shared/shared.module';
import { AppRoutingModule } from '../../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogListComponent} from './components/dialog-list/dialog-list.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ScrollableListNotifierService} from '../../../shared/services/scrollable-list-notifier.service';


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
    MessageComponent,
    SortMessagesPanelComponent,
    NewMessagePanelComponent,
    MessagesPageComponent,
    DialogListComponent
  ]
})


export class MessagesPageModule { }
