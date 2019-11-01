import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, Observable, Subscription} from 'rxjs';
import InterlocutorData from './models/interlocutor-data.model';
import {DialogService} from './services/dialog.service';
import MessageInChat from './models/message-in-chat.model';

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

  chatHash: string;

  constructor(private route: ActivatedRoute,
              private dialogService: DialogService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chatHash = params.chatHash;
    });

    //this.getFriendData();
  }

  getFriendData(){
    //this.chatFriendData$ = this.dialogService.getChatFriendData(this.chatHash);


  }


  ngOnDestroy(): void {
    //this.chatFriendDataSubscription.unsubscribe();
  }
}
