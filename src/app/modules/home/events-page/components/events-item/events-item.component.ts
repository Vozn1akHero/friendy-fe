import {Component, Input, OnInit} from '@angular/core';
import Event from '../../models/event.model';

@Component({
  selector: 'app-events-item',
  templateUrl: './events-item.component.html',
  styleUrls: ['./events-item.component.scss']
})
export class EventsItemComponent implements OnInit {
  @Input() eventData : Event;

  constructor() { }

  ngOnInit() {
  }

}
