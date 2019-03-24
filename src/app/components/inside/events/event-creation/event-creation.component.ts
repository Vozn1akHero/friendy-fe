import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.scss']
})
export class EventCreationComponent implements OnInit {
  @Output() closeEventCreationPopup = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closePopup(){
    this.closeEventCreationPopup.emit();
  }
}
