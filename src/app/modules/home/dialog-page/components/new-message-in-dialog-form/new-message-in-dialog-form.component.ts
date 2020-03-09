import {Component, Input, OnInit, ViewChild} from '@angular/core';
import NewMessageInChat from '../../models/new-message-in-chat.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';
import {ActivatedRoute} from '@angular/router';
import InterlocutorDataModel from '../../models/interlocutor-data.model';

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
  //receiverId: number;
  @Input() interlocutorData: InterlocutorDataModel;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.chatId = this.route.snapshot.data.chatData.id;
  }

  newMessageEvent() {
    const textFieldValue : string = this.newMessageContent.nativeElement.value;
    if(this.imageFile){
      const newMessage : NewMessageInChat = new NewMessageInChat(textFieldValue, this.imageFile);
      this.store.dispatch(new DialogActions.AddNewMessage({
        chatId: this.chatId, receiverId: this.interlocutorData.id, newMessage: newMessage
      }))
    } else {
      if(textFieldValue.length>0){
        const newMessage : NewMessageInChat = new NewMessageInChat(textFieldValue, null);
        this.store.dispatch(new DialogActions.AddNewMessage({
          chatId: this.chatId, receiverId: this.interlocutorData.id, newMessage: newMessage
        }))
      }
    }
  }

  onImageSelection() {
    this.imageFile = this.image.nativeElement.files[0];
  }

  removeSelectedImage() {
    this.imageFile = null;
    this.image.nativeElement.value = '';
  }
}

