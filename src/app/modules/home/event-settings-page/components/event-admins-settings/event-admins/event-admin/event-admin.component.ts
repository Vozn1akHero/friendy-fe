import {Component, Input, OnInit} from '@angular/core';
import EventAdminModel from '../../../../models/event-admin.model';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.scss']
})
export class EventAdminComponent implements OnInit {
  @Input() eventAdmin: EventAdminModel;

  constructor() { }

  ngOnInit() {
  }

}
