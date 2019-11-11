import {Component, Input, OnInit} from '@angular/core';
import Event from '../../../models/event.model';

@Component({
  selector: 'app-administered-event-item',
  templateUrl: './user-administered-event-item.component.html',
  styleUrls: ['./user-administered-event-item.component.scss']
})
export class UserAdministeredEventItemComponent implements OnInit {
  @Input() eventData : Event;

  constructor() { }

  ngOnInit() {
  }

}
