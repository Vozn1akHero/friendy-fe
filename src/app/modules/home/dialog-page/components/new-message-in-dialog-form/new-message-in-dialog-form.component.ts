import {Component, Input, OnInit} from '@angular/core';
import NewMessageInChat from '../../models/new-message-in-chat.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-message-in-dialog-form',
  templateUrl: './new-message-in-dialog-form.component.html',
  styleUrls: ['./new-message-in-dialog-form.component.scss']
})
export class NewMessageInDialogFormComponent implements OnInit {
  chatHash: string;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chatHash = params.chatHash;
    });
  }

  newMessageEvent($event) {
    const newMessage : NewMessageInChat = new NewMessageInChat($event.newMessageContent, $event.image);

    this.store.dispatch(new DialogActions.AddNewMessage({
      chatHash: this.chatHash, newMessage: newMessage
    }))
  }
}

