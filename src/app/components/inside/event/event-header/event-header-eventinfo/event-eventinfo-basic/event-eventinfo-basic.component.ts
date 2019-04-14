import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-eventinfo-basic',
  templateUrl: './event-eventinfo-basic.component.html',
  styleUrls: ['./event-eventinfo-basic.component.scss']
})
export class EventEventinfoBasicComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }

}
