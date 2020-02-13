import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import DialogModel from '../../../models/dialog.model';

@Component({
  selector: 'app-chats-in-dialog-item',
  templateUrl: './chats-in-dialog-item.component.html',
  styleUrls: ['./chats-in-dialog-item.component.scss']
})
export class ChatsInDialogItemComponent implements OnInit {
  @Input() data: DialogModel;
  cutMsgContent: string;

  constructor() { }

  ngOnInit() {
    const actMsgContent = this.data.content;
    if(actMsgContent.length > 100) {
      const words = actMsgContent.split(" ");
      if(words.length > 5){
        this.cutMsgContent = words.slice(0, 4).join(" ") + "...";
      }
    } else {
      this.cutMsgContent = actMsgContent;
    }
  }
}
