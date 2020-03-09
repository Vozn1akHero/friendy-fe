import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-search-input',
  templateUrl: './dialog-search-input.component.html',
  styleUrls: ['./dialog-search-input.component.scss']
})
export class DialogSearchInputComponent implements OnInit {
  @Output() showContactsEmitter: EventEmitter<void> = new EventEmitter();
  @Output () hideContactsEmitter: EventEmitter<void> = new EventEmitter();
  value: string = "";

  constructor() { }

  ngOnInit() {
  }

  showContacts() {
    if(this.value.length == 0) this.showContactsEmitter.emit();
  }

  hideContacts(){
    if(this.value.length == 0) this.hideContactsEmitter.emit();
  }
}
