import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {ScrollableListNotifierService} from '../../../../../../shared/services/scrollable-list-notifier.service';
import * as DialogListActions from '../../../store/dialog-list/dialog-list.actions';
import DialogModel from '../../../models/dialog.model';
import {Router} from '@angular/router';
import {AppState} from '../../../store/reducers';

@Component({
  selector: 'app-chats-in-dialog-panel',
  templateUrl: './chats-in-dialog-panel.component.html',
  styleUrls: ['./chats-in-dialog-panel.component.scss']
})
export class ChatsInDialogPanelComponent implements OnInit, OnDestroy {
  dialogListLoaded$: Observable<boolean>;
  dialogListSubscription: Subscription;
  dialogList: DialogModel[];
  updateListNotifierSubscription: Subscription;

  constructor(private store: Store<AppState>,
              private router : Router,
              private scrollableListNotifierService: ScrollableListNotifierService) {
  }

  ngOnInit() {
    this.getExemplaryMessages();
    this.updateList();
  }

  getExemplaryMessages() {
    this.dialogListLoaded$ = this.store
      .select(state => state.fromDialogPageDialogList.loaded);
    this.dialogListSubscription = this.store.select(state => state.fromDialogPageDialogList.dialogList)
      .subscribe(dialogList => {
        this.dialogList = dialogList;
      });
  }

  updateList() {
    this.updateListNotifierSubscription = this.scrollableListNotifierService.endReached$.subscribe(value => {
      if (value) {
        this.store.dispatch(new DialogListActions.GetDialogList({page: this.scrollableListNotifierService.currentPage}));
        this.scrollableListNotifierService.setDefaultValue();
      }
    });
  }

  ngOnDestroy(): void {
    this.dialogListSubscription.unsubscribe();
    this.updateListNotifierSubscription.unsubscribe();
  }
}
