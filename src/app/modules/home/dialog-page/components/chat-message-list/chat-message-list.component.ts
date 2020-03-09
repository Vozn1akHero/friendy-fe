import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit, QueryList,
  ViewChild, ViewChildren
} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import MessageInChatModel from '../../models/message-in-chat.model';
import {ActivatedRoute, Router} from '@angular/router';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';
import {ScrollableListNotifierService} from "../../../../../shared/services/scrollable-list-notifier.service";
import {AppState} from '../../store/reducers';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy, AfterViewInit{
  messagesLoaded$ : Observable<boolean>;
  messagesLoading$ : Observable<boolean>;
  messages: MessageInChatModel[];
  messages$: Observable<MessageInChatModel[]>;
  scrollSubscription: Subscription;
  @Input() userId: number;
  @ViewChild('messagesEnd') messagesEnd;
  @ViewChild('messageList') messageList;
  //@ViewChild('listWrap') listWrap;
  @ViewChildren('messageItemComponent') messageItemComponents: QueryList<any>;

  constructor(private store: Store<AppState>,
              private scrollableListNotifierService : ScrollableListNotifierService,
              private router: Router,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.getDialog();
    this.setMessageList();
    this.setListScrollListener();
  }

  getDialog(){
    this.store.dispatch(new DialogActions.GetInitialDialog({
      to: this.route.snapshot.params.id
    }));
  }

  setMessageList(){
    this.messagesLoaded$ = this.store.select(e => e.fromDialogPageDialogMessages.loaded);
    this.messagesLoading$ = this.store.select(e => e.fromDialogPageDialogMessages.loading);
    this.messages$ = this.store
      .select(e => e.fromDialogPageDialogMessages.messagesInDialog);
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

  ngAfterViewInit(): void {
    this.messageItemComponents.changes.subscribe(this.scrollToBottom);
  }

  scrollToBottom(){
    try {
      this.messageList.nativeElement.scrollTop = this.messageList.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
