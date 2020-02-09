import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('image') image;
  imageFile: File;
  @ViewChild('newMessageContent') newMessageContent;
  newMessage: NewMessageInChat;
  chatId: number;
  receiverId: number;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.chatId = this.route.snapshot.data.chatData.id;
    this.receiverId = this.route.snapshot.queryParams.to;
  }

  newMessageEvent() {
    const textFieldValue : string = this.newMessageContent.nativeElement.value;
    const image = this.image.nativeElement;
    if(image.files && image.files[0]){
      this.imageFile = image.files[0];
      const newMessage : NewMessageInChat = new NewMessageInChat(textFieldValue, image.files[0]);
      this.store.dispatch(new DialogActions.AddNewMessage({
        chatId: this.chatId, receiverId: this.receiverId, newMessage: newMessage
      }))
    } else {
      if(textFieldValue.length>0){
        const newMessage : NewMessageInChat = new NewMessageInChat(textFieldValue, null);
        this.store.dispatch(new DialogActions.AddNewMessage({
          chatId: this.chatId, receiverId: this.receiverId, newMessage: newMessage
        }))
      }
    }
  }
}

