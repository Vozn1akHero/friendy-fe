import {Component, OnDestroy, OnInit} from '@angular/core';
import {State, Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import ExemplaryMessage from './models/exemplary-message.model';
import * as ExemplaryMesagesActions from './store/exemplary-messages/exemplary-messages.actions';

@Component({
  selector: 'app-messages',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit, OnDestroy {
  choosenTypeOfMessages : string = 'all';
  exemplaryMessagesLoaded$: Observable<boolean>;
  exemplaryMessagesSubsctiption: Subscription;
  exemplaryMessages: ExemplaryMessage[];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.exemplaryMessagesLoaded$ = this.store
      .select(state => state.messagesPageExemplaryMessages.loaded);

    this.getExemplaryMessages();
  }

  getExemplaryMessages() {
    this.store.dispatch(new ExemplaryMesagesActions.GetExemplaryMessages());
    this.exemplaryMessagesSubsctiption = this.store.select(state => state.messagesPageExemplaryMessages.exemplaryMessages)
      .subscribe(exemplaryMessages => {
/*        if(exemplaryMessages.length === 0){
          this.store.dispatch(new ExemplaryMesagesActions.GetExemplaryMessages());
        }*/
        this.exemplaryMessages = exemplaryMessages;
      })
  }

  ngOnDestroy(): void {
    this.exemplaryMessagesSubsctiption.unsubscribe();
  }



}
