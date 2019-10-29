import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.scss']
})
export class NewMessageFormComponent {
  @Input() styles = {
    newMessageWidth: '500px',
    newMessageFormTextAreaWidth : '44em',
    newMessageFormFileBtnWrapperInputTop: '0',
    formPosition: 'static',
    formBottomPos: '0rem'
  };
  @Output() event : EventEmitter<Object> = new EventEmitter<Object>();

  @ViewChild('image') image;
  imageFile: File;

  @ViewChild('newMessageContent') newMessageContent;


  onSubmit() {
    const image = this.image.nativeElement;
    if(image.files && image.files[0]){
      this.imageFile = image.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const newMessage = {
          newMessageContent: this.newMessageContent.nativeElement.value,
          image: String(reader.result)
        };
        this.event.emit(newMessage);
      };
      reader.readAsDataURL(this.imageFile);
    } else {
      const newMessage = {
        newMessageContent: this.newMessageContent.nativeElement.value,
        image: null
      };

      this.event.emit(newMessage);
    }
  }
}
