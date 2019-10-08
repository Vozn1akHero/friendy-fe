import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-header-bg',
  templateUrl: './event-header-bg.component.html',
  styleUrls: ['./event-header-bg.component.scss']
})
export class EventHeaderBgComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }

}
