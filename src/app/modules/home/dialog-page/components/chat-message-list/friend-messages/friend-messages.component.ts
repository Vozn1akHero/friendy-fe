import {Component, Input, OnInit} from '@angular/core';
import MessageInChatModel from '../../../models/message-in-chat.model';
import {Observable} from 'rxjs';
import ChatFriendBasicData from '../../../models/interlocutor-data.model';
import * as moment from 'moment';

@Component({
  selector: 'app-friend-messages',
  templateUrl: './friend-messages.component.html',
  styleUrls: ['./friend-messages.component.scss']
})
export class FriendMessagesComponent implements OnInit {
  @Input() messages : MessageInChatModel[];
  @Input() chatInterlocutorAvatar: string;
  @Input() chatInterlocutorId: number;

  constructor() { }

  ngOnInit() {

  }
}
