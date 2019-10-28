import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-message-in-dialog-form',
  templateUrl: './new-message-in-dialog-form.component.html',
  styleUrls: ['./new-message-in-dialog-form.component.scss']
})
export class NewMessageInDialogFormComponent implements OnInit {
  @Input() chatHash : string;

  constructor() { }

  ngOnInit() {
  }

  newMessageEvent($event: FormGroup) {
    console.log($event);
  }
}
