import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FriendModel} from '../../../../models/friend.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: FriendModel;
  @Output() selectContactEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectContact() {
    this.selectContactEmitter.emit(this.contact.id);
  }
}
