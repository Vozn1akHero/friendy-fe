import {Component, Input, OnInit} from '@angular/core';
import Event from '../../models/event.model';

@Component({
  selector: 'app-user-event-item',
  templateUrl: './user-event-item.component.html',
  styleUrls: ['./user-event-item.component.scss']
})
export class UserEventItemComponent implements OnInit {
  @Input() eventData : Event;
  @Input() enumType : string;

  constructor() { }

  ngOnInit() {
    console.log(this.eventData)
  }
}
