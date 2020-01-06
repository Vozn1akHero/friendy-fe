import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-list-wrapper',
  templateUrl: './event-list-wrapper.component.html',
  styleUrls: ['./event-list-wrapper.component.scss']
})
export class EventListWrapperComponent implements OnInit {
  @Input() searchActivated: boolean;

  constructor() { }

  ngOnInit() {
  }

}
