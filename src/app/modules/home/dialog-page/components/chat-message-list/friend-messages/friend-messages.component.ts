import {Component, Input, OnInit} from '@angular/core';
import MessageInChat from '../../../models/message-in-chat.model';
import {Observable} from 'rxjs';
import ChatFriendBasicData from '../../../models/chat-friend-basic-data.model';
import * as moment from 'moment';

@Component({
  selector: 'app-friend-messages',
  templateUrl: './friend-messages.component.html',
  styleUrls: ['./friend-messages.component.scss']
})
export class FriendMessagesComponent implements OnInit {
  @Input() messages : MessageInChat[];
  @Input() chatFriendAvatar: string;
  @Input() chatFriendId: number;

  constructor() { }

  ngOnInit() {

  }
}
