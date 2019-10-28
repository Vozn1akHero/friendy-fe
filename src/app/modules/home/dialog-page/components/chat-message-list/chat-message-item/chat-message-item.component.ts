import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-message-item',
  templateUrl: './chat-message-item.component.html',
  styleUrls: ['./chat-message-item.component.scss']
})
export class ChatMessageItemComponent implements OnInit {
  @Input() messageContent : string;
  @Input() messageStyles;

  constructor() { }

  ngOnInit() {
  }

}
