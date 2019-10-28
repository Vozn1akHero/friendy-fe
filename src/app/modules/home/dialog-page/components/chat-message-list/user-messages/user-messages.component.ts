import {Component, Input, OnInit} from '@angular/core';
import MessageInChat from '../../../models/message-in-chat.model';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.scss']
})
export class UserMessagesComponent implements OnInit {
  @Input() messages : MessageInChat[];

  constructor() { }

  ngOnInit() {
  }

}
