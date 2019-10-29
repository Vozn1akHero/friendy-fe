import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import NewMessageInChat from '../../models/new-message-in-chat.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';

@Component({
  selector: 'app-new-message-in-dialog-form',
  templateUrl: './new-message-in-dialog-form.component.html',
  styleUrls: ['./new-message-in-dialog-form.component.scss']
})
export class NewMessageInDialogFormComponent implements OnInit {
  @Input() chatHash: string;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
  }

  newMessageEvent($event) {
    const newMessage : NewMessageInChat = new NewMessageInChat($event.newMessageContent, $event.image);

    this.store.dispatch(new DialogActions.AddNewMessage({
      chatHash: this.chatHash, newMessage: newMessage
    }))
  }
}

