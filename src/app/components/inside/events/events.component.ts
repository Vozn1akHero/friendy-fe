import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  searchEventsInputOpened = false;
  eventCreationPopupOpened = false;
  // @ts-ignore
  daysOfMonth = this.getDaysOfMonth();

  getDaysOfMonth() {
    return Array.apply(null, Array(5)).map((_, i) => i + 1);
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  openOrCloseEventCreationPopup() {
    this.eventCreationPopupOpened = this.eventCreationPopupOpened === false;
  }


}
