import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-message-panel',
  templateUrl: './new-message-panel.component.html',
  styleUrls: ['./new-message-panel.component.scss']
})
export class NewMessagePanelComponent implements OnInit {
  newMessage: FormGroup = new FormGroup(
    {
      chosenFriend: new FormControl(null, [Validators.required]),
      messageContent: new FormControl(null, [Validators.required])
    }
  );

  constructor() { }

  ngOnInit() {
  }
}
