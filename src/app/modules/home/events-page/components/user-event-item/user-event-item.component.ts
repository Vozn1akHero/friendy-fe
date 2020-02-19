import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Event from '../../models/event.model';

@Component({
  selector: 'app-user-event-item',
  templateUrl: './user-event-item.component.html',
  styleUrls: ['./user-event-item.component.scss']
})
export class UserEventItemComponent implements OnInit {
  @Input() eventData : Event;
  @Input() showControls: boolean;
  @Input() chosenType: string;
  @Input() styles;
  @Output() leaveEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() applyEventEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  leave() {
    this.leaveEventEmitter.emit(this.eventData.id);
  }

  apply() {
    this.applyEventEmitter.emit(this.eventData.id);
  }
}
