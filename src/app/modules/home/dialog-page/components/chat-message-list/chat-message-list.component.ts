import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import MessageInChat from '../../models/message-in-chat.model';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';
import ChatFriendBasicData from '../../models/chat-friend-basic-data.model';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  @Input() chatHash : string;
  @Input() chatFriendData$ : Observable<ChatFriendBasicData>;

  messagesInDialogLoaded$: Observable<boolean>;
  messagesInDialogSubscription: Subscription;


  orderedMessages: any[] = [];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.messagesInDialogLoaded$ = this.store
      .select(state => state.messagesPageDialog.loaded);

    this.getMessagesInDialog();
  }

  getMessagesInDialog(){
    this.store.dispatch(new DialogActions.GetDialog({ chatHash: this.chatHash }));

    this.messagesInDialogSubscription = this.store.select(state => state.messagesPageDialog.messagesInDialog)
      .subscribe(messages => {
        this.groupMessages(messages);
      })
  }

  groupMessages(messages: MessageInChat[]){
    let msgGroupStartIndex = 0;
    let friendMsgsSubgroup = [];
    let userMsgsSubgroup = [];

    let friendMsgsGroup = [];
    let userMsgsGroup = [];

    console.log(messages);

    messages.map((message, index) => {
      if(message.isUserAuthor) {
        if (index > 0 &&
          messages[index - 1].isUserAuthor) {
          userMsgsSubgroup.push(message);
        } else if (index > 0 && !messages[index - 1].isUserAuthor){
          //friendMsgsGroup.push(friendMsgsSubgroup);
          this.orderedMessages.push({
            messages: friendMsgsSubgroup,
            isAuthor: false
          });
          friendMsgsSubgroup = [];

          userMsgsSubgroup.push(message);
        } else if(index === 0){
          userMsgsSubgroup.push(message);
        }
      } else {
        if (index > 0 &&
          !messages[index - 1].isUserAuthor) {
          friendMsgsSubgroup.push(message);
        } else if (index > 0 && messages[index - 1].isUserAuthor){
          //userMsgsGroup.push(userMsgsSubgroup);
          this.orderedMessages.push({
            messages: userMsgsSubgroup,
            isAuthor: true
          });
          userMsgsSubgroup = [];

          friendMsgsSubgroup.push(message);
        } else if(index === 0){
          friendMsgsSubgroup.push(message);
        }
      }

      if(messages.length - index === 1){
        if(message.isUserAuthor){
          //userMsgsGroup.push(userMsgsSubgroup);
          this.orderedMessages.push({
            messages: userMsgsSubgroup,
            isAuthor: true
          });
        } else {
          //friendMsgsGroup.push(friendMsgsSubgroup);
          this.orderedMessages.push({
            messages: friendMsgsSubgroup,
            isAuthor: false
          });
        }
      }
    });

    //console.log(friendMsgsGroup, userMsgsGroup, this.orderedMessages);
  }

  ngOnDestroy(): void {
    this.messagesInDialogSubscription.unsubscribe();
  }
}
