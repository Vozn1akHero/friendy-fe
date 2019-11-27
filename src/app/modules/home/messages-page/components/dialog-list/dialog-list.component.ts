import {Component, OnDestroy, OnInit} from '@angular/core';
import * as ExemplaryMessagesActions from '../../store/exemplary-messages/exemplary-messages.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import ExemplaryMessage from '../../models/exemplary-message.model';

@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.scss']
})
export class DialogListComponent implements OnInit, OnDestroy {
  exemplaryMessagesLoaded$: Observable<boolean>;
  exemplaryMessagesSubscription: Subscription;
  exemplaryMessages: ExemplaryMessage[];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.exemplaryMessagesLoaded$ = this.store
      .select(state => state.messagesPageExemplaryMessages.loaded);
    this.getExemplaryMessages();
  }

  getExemplaryMessages() {
    this.store.dispatch(new ExemplaryMessagesActions.GetExemplaryMessages({ startIndex: 1, length: 10 }));
    this.exemplaryMessagesSubscription = this.store.select(state => state.messagesPageExemplaryMessages.exemplaryMessages)
      .subscribe(exemplaryMessages => {
        this.exemplaryMessages = exemplaryMessages;
      })
  }

  ngOnDestroy(): void {
    this.exemplaryMessagesSubscription.unsubscribe();
  }
}
