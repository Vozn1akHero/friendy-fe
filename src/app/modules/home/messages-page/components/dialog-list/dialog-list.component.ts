import {Component, OnDestroy, OnInit} from '@angular/core';
import * as ExemplaryMessagesActions from '../../store/exemplary-messages/exemplary-messages.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import ExemplaryMessage from '../../models/exemplary-message.model';
import {ScrollableListNotifierService} from '../../../../../shared/services/scrollable-list-notifier.service';

@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.scss']
})
export class DialogListComponent implements OnInit, OnDestroy {
  exemplaryMessagesLoaded$: Observable<boolean>;
  exemplaryMessagesSubscription: Subscription;
  exemplaryMessages: ExemplaryMessage[];
  updateListNotifierSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private scrollableListNotifierService: ScrollableListNotifierService) {
  }

  ngOnInit() {
    this.getExemplaryMessages();
    this.updateList();
  }

  getExemplaryMessages() {
    this.exemplaryMessagesLoaded$ = this.store
      .select(state => state.messagesPageExemplaryMessages.loaded);
    this.store.dispatch(new ExemplaryMessagesActions.GetExemplaryMessages({page: 1}));
    this.exemplaryMessagesSubscription = this.store.select(state => state.messagesPageExemplaryMessages.exemplaryMessages)
      .subscribe(exemplaryMessages => {
        this.exemplaryMessages = exemplaryMessages;
      });
  }

  updateList() {
    this.updateListNotifierSubscription = this.scrollableListNotifierService.endReached$.subscribe(value => {
      if (value) {
        this.store.dispatch(new ExemplaryMessagesActions.GetExemplaryMessages({page: this.scrollableListNotifierService.currentPage}));
        this.scrollableListNotifierService.setDefaultValue();
      }
    });
  }

  ngOnDestroy(): void {
    this.exemplaryMessagesSubscription.unsubscribe();
    this.updateListNotifierSubscription.unsubscribe();
  }
}
