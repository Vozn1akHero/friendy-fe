import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events-list-controls',
  templateUrl: './events-list-controls.component.html',
  styleUrls: ['./events-list-controls.component.scss']
})
export class EventsListControlsComponent implements OnInit {
  @Input() typeOfEventsToShow;
  @Output() changeConcreteTypeOfEvents : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  showConcreteTypeOfEvents(value) {
    this.changeConcreteTypeOfEvents.emit(value);
  }

}
