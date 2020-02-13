import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import MessageInChatModel from '../../models/message-in-chat.model';
import {ActivatedRoute} from '@angular/router';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';
import {UserIdService} from '../../../../../shared/services/user-id.service';
import {ScrollableListNotifierService} from "../../../../../shared/services/scrollable-list-notifier.service";

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  messagesLoaded$ : Observable<boolean>;
  messagesLoading$ : Observable<boolean>;
  messages: MessageInChatModel[];
  messages$: Observable<MessageInChatModel[]>;
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
    this.store.dispatch(new DialogActions.GetInitialDialog({
      to: this.route.snapshot.params.id
    }));
  }

  setMessageList(){
    this.messagesLoaded$ = this.store.select(e => e.dialogPageDialog.loaded);
    this.messagesLoading$ = this.store.select(e => e.dialogPageDialog.loading);
    this.messages$ = this.store
      .select(e => e.dialogPageDialog.messagesInDialog);
  }

  setProfileId(){
    this.profileId = this.profileIdService.userIdValue;
  }

  updateMessages(){
    this.scrollableListNotifierService.notify();
  }

  setListScrollListener(){
    this.scrollSubscription = this.scrollableListNotifierService.endReached$.subscribe(value => {
      if(value){
        this.store.dispatch(new DialogActions.GetDialog({
          to: this.route.snapshot.params.id,
          page: this.scrollableListNotifierService.currentPage
        }));
        this.scrollableListNotifierService.setDefaultValue();
      }
    })
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }
}
