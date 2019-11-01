import {Component, Input, OnInit} from '@angular/core';
import MessageInChatModel from '../../../models/message-in-chat.model';
import * as moment from 'moment';

@Component({
  selector: 'app-chat-message-item',
  templateUrl: './chat-message-item.component.html',
  styleUrls: ['./chat-message-item.component.scss']
})
export class ChatMessageItemComponent implements OnInit {
  @Input() messageStyles : {[p: string]:string};
  @Input() messageData: MessageInChatModel;

  timePassed: string;

  constructor() { }

  ngOnInit() {
    this.timePassed = moment(this.messageData.date).fromNow();
  }
}
