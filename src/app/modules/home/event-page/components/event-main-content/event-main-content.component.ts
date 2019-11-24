import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-main-content',
  templateUrl: './event-main-content.component.html',
  styleUrls: ['./event-main-content.component.scss']
})
export class EventMainContentComponent implements OnInit {
  @Input() activeSettings;
  @Input() isEventAdmin: boolean;

  constructor() { }

  ngOnInit() {
  }
}
