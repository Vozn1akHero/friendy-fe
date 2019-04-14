import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-event-header-eventinfo',
  templateUrl: './event-header-eventinfo.component.html',
  styleUrls: ['./event-header-eventinfo.component.scss']
})
export class EventHeaderEventinfoComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }


}
