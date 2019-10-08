import {Component, Input, OnInit} from '@angular/core';
import Event from '../../../models/event.model';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.scss']
})
export class UserEventComponent implements OnInit {
  @Input() eventData : Event;

  constructor() { }

  ngOnInit() {
    console.log(this.eventData)
  }

}
