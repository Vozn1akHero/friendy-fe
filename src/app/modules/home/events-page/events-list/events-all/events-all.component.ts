import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events-all',
  templateUrl: './events-all.component.html',
  styleUrls: ['./events-all.component.scss']
})
export class EventsAllComponent implements OnInit {
  @Input() typeOfEventsToShow;

  constructor() { }

  ngOnInit() {
  }

  

}
