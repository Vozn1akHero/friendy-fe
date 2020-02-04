import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import MessageInChatModel from '../../models/message-in-chat.model';
import {ActivatedRoute} from '@angular/router';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';
import {UserIdService} from '../../../../../shared/services/user-id.service';
import * as UserFriendsActions from "../../../friends-page/store/user-friends/user-friends.actions";
import {ScrollableListNotifierService} from "../../../../../shared/services/scrollable-list-notifier.service";

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
  scrollSubscription: Subscription;


  constructor(private store: Store<fromApp.AppState>,
              private scrollableListNotifierService : ScrollableListNotifierService,
              private profileIdService: UserIdService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.getDialog();
    this.setMessageList();
    this.setProfileId();
    this.setListScrollListener();
  }

  getDialog(){
    this.messagesLoaded$ = this.store.select(e => e.messagesPageDialog.loaded);

    this.store.dispatch(new DialogActions.GetDialog({
      to: this.route.snapshot.queryParams.to,
      page: 1
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

  setListScrollListener(){
    this.scrollSubscription = this.scrollableListNotifierService.endReached$.subscribe(value => {
      if(value){
        this.store.dispatch(new DialogActions.GetDialog({
          to: this.route.snapshot.queryParams.to,
          page: this.scrollableListNotifierService.currentPage
        }));
        this.scrollableListNotifierService.setDefaultValue();
      }
    })
  }

  ngOnDestroy(): void {
    this.messagesSubscription.unsubscribe();
    this.scrollSubscription.unsubscribe();
  }
}
