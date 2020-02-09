import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-event-creation-btn-wrapper',
  templateUrl: './event-creation-btn-wrapper.component.html',
  styleUrls: ['./event-creation-btn-wrapper.component.scss']
})
export class EventCreationBtnWrapperComponent implements OnInit {
  @Output() popupEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openOrCloseEventCreationPopup() {
    this.popupEmitter.emit();
  }
}
