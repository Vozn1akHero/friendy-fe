import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-header-bg-alter',
  templateUrl: './event-header-bg-alter.component.html',
  styleUrls: ['./event-header-bg-alter.component.scss']
})
export class EventHeaderBgAlterComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }

}
