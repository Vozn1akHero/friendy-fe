import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import MessageInChatModel from '../../models/message-in-chat.model';
import {ActivatedRoute} from '@angular/router';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';
import {UserIdService} from '../../../../../shared/services/user-id.service';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  //interlocutorData: InterlocutorDataModel;
  messagesSubscription: Subscription;
  messagesLoaded$ : Observable<boolean>;
  messages: MessageInChatModel[];
  profileId: number;

  constructor(private store: Store<fromApp.AppState>,
              private profileIdService: UserIdService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.getDialog();
    this.setMessageList();
    this.setProfileId();
  }

  getDialog(){
    this.messagesLoaded$ = this.store.select(e => e.messagesPageDialog.loaded);

    this.store.dispatch(new DialogActions.GetDialog({
      to: this.route.snapshot.queryParams.to,
      startIndex: 1,
      length: 10
    }));

    //this.interlocutorData = this.route.snapshot.data.interlocutorData;
  }

  setMessageList(){
    this.messagesSubscription = this.store
      .select(e => e.messagesPageDialog.messagesInDialog)
      .subscribe(messagesPageDialog => {
        this.messages = messagesPageDialog;
      })
  }

  setProfileId(){
    this.profileId = this.profileIdService.userId;
  }

  ngOnDestroy(): void {
    this.messagesSubscription.unsubscribe();
  }
}
