import {Component, Input, OnInit} from '@angular/core';
import Event from '../../../models/event.model';

@Component({
  selector: 'app-administered-events-item',
  templateUrl: './user-administered-event.component.html',
  styleUrls: ['./user-administered-event.component.scss']
})
export class UserAdministeredEventComponent implements OnInit {
  @Input() eventData : Event;

  constructor() { }

  ngOnInit() {
  }

}
