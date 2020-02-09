import {Component, Input, OnInit} from '@angular/core';
import Event from '../../models/event.model';

@Component({
  selector: 'app-user-event-item',
  templateUrl: './user-event-item.component.html',
  styleUrls: ['./user-event-item.component.scss']
})
export class UserEventItemComponent implements OnInit {
  @Input() eventData : Event;
  @Input() showControls: boolean;
  @Input() chosenType: string;
  @Input() styles;

  constructor() { }

  ngOnInit() {

  }
}
