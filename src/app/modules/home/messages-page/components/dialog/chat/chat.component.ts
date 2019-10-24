import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import MessageInChat from '../../../models/message-in-chat.model';
import * as DialogActions from '../../../store/dialog-messages/dialog-messages.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  @Input() chatHash : string;

  messagesInDialogLoaded$: Observable<boolean>;
  messagesInDialogSubscription: Subscription;
  messagesInDialog: MessageInChat[];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.messagesInDialogLoaded$ = this.store
      .select(state => state.messagesPageDialog.loaded);

    this.getMessagesInDialog();
  }

  getMessagesInDialog(){
    /*this.store.dispatch(new DialogActions.GetDialog());

    this.messagesInDialogSubscription = this.store.select(state => state.messagesPageDialog.messagesInDialog)
      .subscribe(messages => {
        console.log(messages);
        this.messagesInDialog = messages;
      })*/
  }

  ngOnDestroy(): void {
    this.messagesInDialogSubscription.unsubscribe();
  }
}
