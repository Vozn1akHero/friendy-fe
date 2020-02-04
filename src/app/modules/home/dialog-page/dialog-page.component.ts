import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DialogHubService} from '../../../shared/services/dialog-hub.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ScrollableListNotifierService} from "../../../shared/services/scrollable-list-notifier.service";

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss']
})
export class DialogPageComponent implements OnInit, OnDestroy {
  newMessage : FormGroup = new FormGroup({
    newMessageContent: new FormControl('', [Validators.required, Validators.minLength(1)]),
    image: new FormControl('')
  });

  interlocutorId: string;
  chatId: string;
  private unsubscribe$ = new Subject();

  constructor(private route: ActivatedRoute,
              private scrollableListNotifierService : ScrollableListNotifierService,
              private dialogHubService: DialogHubService) {}

  ngOnInit() {
    this.interlocutorId = this.route.snapshot.queryParams.to;
    this.chatId = this.route.snapshot.data.chatData.id;

    this.activateDialogHub();
  }

  activateDialogHub(){
    this.dialogHubService.connected$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        if(value){
          this.dialogHubService.joinGroup(this.chatId);
          this.dialogHubService.listenToNewMessage();
        }
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  updateMessages() {
    this.scrollableListNotifierService.notify();
  }
}
