import {Component, Input, OnInit} from '@angular/core';
import MessageInChat from '../../../models/message-in-chat.model';
import * as moment from 'moment';

@Component({
  selector: 'app-chat-message-item',
  templateUrl: './chat-message-item.component.html',
  styleUrls: ['./chat-message-item.component.scss']
})
export class ChatMessageItemComponent implements OnInit {
  @Input() messageStyles : Object;
  @Input() message: MessageInChat;

  timePassed: string;

  constructor() { }

  ngOnInit() {
    this.timePassed = moment(this.message.date).fromNow();

    console.log(this.message.isUserAuthor)
  }

}
