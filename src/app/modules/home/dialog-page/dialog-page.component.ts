import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import ChatFriendBasicData from './models/chat-friend-basic-data.model';
import {DialogService} from './services/dialog.service';

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss']
})
export class DialogPageComponent implements OnInit {
  newMessage : FormGroup = new FormGroup({
    newMessageContent: new FormControl('', [Validators.required, Validators.minLength(1)]),
    image: new FormControl('')
  });

  chatHash: string;
  chatFriendData$: Observable<ChatFriendBasicData>;
  chatFriendData: ChatFriendBasicData;
  chatFriendDataSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private dialogService: DialogService) {}

  getFriendData(){
    this.chatFriendData$ = this.dialogService.getChatFriendData(this.chatHash);
/*    this.chatFriendDataSubscription = this.dialogService.getChatFriendData(this.chatHash).subscribe(chatFriendData => {
      this.chatFriendData = chatFriendData;
    })*/
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.chatHash = params.chatHash;
    });

    this.getFriendData();
  }
}
