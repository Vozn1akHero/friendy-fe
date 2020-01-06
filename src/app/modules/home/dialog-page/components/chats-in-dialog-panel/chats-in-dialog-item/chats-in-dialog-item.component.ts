import {Component, Input, OnInit} from '@angular/core';
import ExemplaryChatModel from '../../../models/exemplary-chat.model';

@Component({
  selector: 'app-chats-in-dialog-item',
  templateUrl: './chats-in-dialog-item.component.html',
  styleUrls: ['./chats-in-dialog-item.component.scss']
})
export class ChatsInDialogItemComponent implements OnInit {
  @Input() data: ExemplaryChatModel;

  constructor() { }

  ngOnInit() {
  }

}
