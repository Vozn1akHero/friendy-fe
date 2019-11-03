import {Component, Input, OnInit, ViewChild} from '@angular/core';
import NewMessageInChat from '../../models/new-message-in-chat.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import * as DialogActions from '../../store/dialog-messages/dialog-messages.actions';
import {ActivatedRoute} from '@angular/router';
import {text} from '@angular/core/src/render3';

@Component({
  selector: 'app-new-message-in-dialog-form',
  templateUrl: './new-message-in-dialog-form.component.html',
  styleUrls: ['./new-message-in-dialog-form.component.scss']
})
export class NewMessageInDialogFormComponent implements OnInit {
  chatHash: string;
  @ViewChild('image') image;
  imageFile: File;
  @ViewChild('newMessageContent') newMessageContent;
  //newMessage: {newMessageContent: string, image: string};
  newMessage: NewMessageInChat;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chatHash = params.chatHash;
    });
  }

  newMessageEvent() {
    const textFieldValue : string = this.newMessageContent.nativeElement.value;
    const image = this.image.nativeElement;
    if(image.files && image.files[0]){
      this.imageFile = image.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const image : string = String(reader.result);
        const newMessage : NewMessageInChat = new NewMessageInChat(textFieldValue, image);
        this.store.dispatch(new DialogActions.AddNewMessage({
          chatHash: this.chatHash, newMessage: newMessage
        }))
      };
      reader.readAsDataURL(this.imageFile);
    } else {
      const newMessage : NewMessageInChat = new NewMessageInChat(textFieldValue, null);
      this.store.dispatch(new DialogActions.AddNewMessage({
        chatHash: this.chatHash, newMessage: newMessage
      }))
    }
  }
}

