import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-event-btn',
  templateUrl: './new-event-btn.component.html',
  styleUrls: ['./new-event-btn.component.scss']
})
export class NewEventBtnComponent implements OnInit {
  @Output() openEventCreationPopupInParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openEventCreationPopupBtn_click(){
    this.openEventCreationPopupInParent.emit();
  }

}
