import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-in-chat',
  templateUrl: './message-in-chat.component.html',
  styleUrls: ['./message-in-chat.component.scss']
})
export class MessageInChatComponent implements OnInit {
  @Input() messageContent : string;
  @Input() messageStyles;

  constructor() { }

  ngOnInit() {
  }

}
