import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {DialogHubService} from '../../../shared/services/dialog-hub.service';
import { takeUntil } from 'rxjs/operators';
import {UserIdService} from '../../../shared/services/user-id.service';
import {ScrollableListNotifierService} from '../../../shared/services/scrollable-list-notifier.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss'],
  providers: [ScrollableListNotifierService]
})
export class MessagesPageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  constructor(private dialogHubService : DialogHubService,
              private userIdService : UserIdService,
              private scrollableListNotifierService : ScrollableListNotifierService) { }

  ngOnInit() {
    this.activateDialogHub();
  }

  activateDialogHub() {
    this.dialogHubService.listenToNewLastMessage();
    this.dialogHubService.connected$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        if(value) {
          this.dialogHubService.joinGroup(this.userIdService.userIdValue.toString());
          this.dialogHubService.listenToNewLastMessage();
        }
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  updateList() {
    this.scrollableListNotifierService.notify();
  }
}
