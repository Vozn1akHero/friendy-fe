import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import {DialogService} from '../../services/dialog.service';
import ChatFriendBasicData from '../../models/chat-friend-basic-data.model';

@Component({
  selector: 'app-chat-friend-data',
  templateUrl: './chat-friend-data.component.html',
  styleUrls: ['./chat-friend-data.component.scss']
})
export class ChatFriendDataComponent implements OnInit, OnDestroy {
  @Input() chatHash : string;
  @Input() chatFriendData : ChatFriendBasicData;

  constructor() { }

  ngOnInit() {
   // this.getMessagesInDialog();
  }

/*  getMessagesInDialog(){
    this.chatFriendData$ = this.dialogService.getChatFriendData(this.chatHash);
  }*/

  ngOnDestroy(): void {
    //this.chatFriendDataSubscription.unsubscribe();
  }
}
