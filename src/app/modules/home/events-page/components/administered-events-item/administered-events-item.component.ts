import {Component, Input, OnInit} from '@angular/core';
import Event from '../../models/event.model';

@Component({
  selector: 'app-administered-events-item',
  templateUrl: './administered-events-item.component.html',
  styleUrls: ['./administered-events-item.component.scss']
})
export class AdministeredEventsItemComponent implements OnInit {
  @Input() eventData : Event;

  constructor() { }

  ngOnInit() {
  }

}
