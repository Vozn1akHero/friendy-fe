import {Component, OnDestroy, OnInit} from '@angular/core';
import {State, Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import {Observable, Subject, Subscription} from 'rxjs';
import ExemplaryMessage from './models/exemplary-message.model';
import * as ExemplaryMesagesActions from './store/exemplary-messages/exemplary-messages.actions';
import {DialogHubService} from '../../../shared/services/dialog-hub.service';
import { takeUntil } from 'rxjs/operators';
import {UserIdService} from '../../../shared/services/user-id.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit, OnDestroy {
  choosenTypeOfMessages : string = 'all';
  dialogHubConnectionStatus: Observable<boolean>;
  private unsubscribe$ = new Subject();


  constructor(private dialogHubService : DialogHubService,
              private userIdService : UserIdService) { }

  ngOnInit() {
    this.activateDialogHub();
  }

  activateDialogHub() {
    this.dialogHubService.listenToNewLastMessage();
    this.dialogHubService.connected$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        if(value) {
          this.dialogHubService.joinGroup(this.userIdService.userId.toString());
          this.dialogHubService.listenToNewLastMessage();
        }
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
