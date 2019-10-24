import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import {DialogService} from '../../../services/dialog.service';
import ChatFriendBasicData from '../../../models/chat-friend-basic-data.model';

@Component({
  selector: 'app-chat-friend-data',
  templateUrl: './chat-friend-data.component.html',
  styleUrls: ['./chat-friend-data.component.scss']
})
export class ChatFriendDataComponent implements OnInit, OnDestroy {
  @Input() chatHash : string;

  chatFriendDataSubscription: Subscription;
  //chatFriendData : ChatFriendBasicData = null;
  chatFriendData$ : Observable<ChatFriendBasicData>;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.getMessagesInDialog();
  }

  getMessagesInDialog(){
/*    this.chatFriendDataSubscription = this.dialogService.getChatFriendData(this.chatHash)
      .subscribe((response) => {
        const chatFriendData : ChatFriendBasicData = response.body as ChatFriendBasicData;

        this.chatFriendData = new ChatFriendBasicData(chatFriendData.name,
          chatFriendData.surname,
          chatFriendData.friendId,
          chatFriendData.avatar);
      });*/
    this.chatFriendData$ = this.dialogService.getChatFriendData(this.chatHash);
  }

  ngOnDestroy(): void {
    //this.chatFriendDataSubscription.unsubscribe();
  }

}
