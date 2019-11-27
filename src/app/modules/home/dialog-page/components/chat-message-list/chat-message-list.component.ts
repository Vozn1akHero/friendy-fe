import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import MessageInChatModel from '../../models/message-in-chat.model';
import {ActivatedRoute} from '@angular/router';
import InterlocutorDataModel from '../../models/interlocutor-data.model';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  interlocutorData: InterlocutorDataModel;
  messagesSubscription: Subscription;
  messagesLoaded$ : Observable<boolean>;
  messages: MessageInChatModel[];

  constructor(private store: Store<fromApp.AppState>,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.messagesLoaded$ = this.store.select(e => e.messagesPageDialog.loaded);

    this.store.dispatch(new DialogActions.GetDialog({
      to: this.route.snapshot.queryParams.to,
      startIndex: 1,
      length: 10
    }));

    this.interlocutorData = this.route.snapshot.data.interlocutorData;

    this.messagesSubscription = this.store
      .select('messagesPageDialog')
      .subscribe(messagesPageDialog => {
        this.messages = messagesPageDialog.messagesInDialog;
    })
  }

  ngOnDestroy(): void {
    this.messagesSubscription.unsubscribe();
  }
}
