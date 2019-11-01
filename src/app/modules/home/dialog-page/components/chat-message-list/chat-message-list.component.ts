import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import MessageInChatModel from '../../models/message-in-chat.model';

import {ActivatedRoute} from '@angular/router';
import InterlocutorDataModel from '../../models/interlocutor-data.model';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  interlocutorData: InterlocutorDataModel;
  chatHash: string;
  messagesSubscription: Subscription;
  messagesLoaded$ : Observable<boolean>;
  messagesLoadedSubscription: Subscription;
  messagesLoaded : boolean = false;

  orderedMessages: any[] = [];

  constructor(private store: Store<fromApp.AppState>,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.messagesLoaded$ = this.store.select(e => e.messagesPageDialog.loaded);
/*    this.messagesLoadedSubscription = this.store.select(e => e.messagesPageDialog.loaded).subscribe(value => {
      this.messagesLoaded = value;
    });*/

    this.route.params.subscribe(params => {
      this.chatHash = params.chatHash;
    });
    this.store.dispatch(new DialogActions.GetDialog({chatHash: this.chatHash}));

    this.interlocutorData = this.route.snapshot.data.interlocutorData;

    this.messagesSubscription = this.store
      .select('messagesPageDialog')
      .subscribe(messagesPageDialog => {
        console.log(messagesPageDialog.messagesInDialog)
      this.groupMessages(messagesPageDialog.messagesInDialog);
    })
  }

  groupMessages(messages: MessageInChatModel[]){
    let friendMsgsSubgroup = [];
    let userMsgsSubgroup = [];

    this.orderedMessages = [];

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
          this.orderedMessages.push({
            messages: friendMsgsSubgroup,
            isAuthor: false
          });
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.messagesSubscription.unsubscribe();
    //this.messagesLoadedSubscription.unsubscribe();
  }
}
