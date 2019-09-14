import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.scss']
})
export class NewMessageFormComponent implements OnInit {
  @Input() styles = {
    newMessageWidth: '500px',
    newMessageFormTextAreaWidth : '44em',
    newMessageFormFileBtnWrapperInputTop: '0',
    formPosition: 'static',
    formBottomPos: '0rem'
  };

  @Output() event : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  contentForm : FormGroup = new FormGroup({
    newMessageContent : new FormControl(''),
    image: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.event.emit(this.contentForm);
  }

}
