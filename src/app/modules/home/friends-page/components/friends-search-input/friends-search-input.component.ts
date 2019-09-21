import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-friends-search-input',
  templateUrl: './friends-search-input.component.html',
  styleUrls: ['./friends-search-input.component.scss']
})
export class FriendsSearchInputComponent implements OnInit {
  @Output() searchFormSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  contentForm : FormGroup = new FormGroup({
    inputContent : new FormControl('')
  });

  ngOnInit(): void {
  }

  onSearchFormSubmit(e){
    e.preventDefault();
    this.searchFormSubmit.emit(this.contentForm.value.inputContent);
  }
}
