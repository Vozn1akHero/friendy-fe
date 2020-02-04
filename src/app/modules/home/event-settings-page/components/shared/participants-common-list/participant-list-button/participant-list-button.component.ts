import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-participant-list-button',
  templateUrl: './participant-list-button.component.html',
  styleUrls: ['./participant-list-button.component.scss']
})
export class ParticipantListButtonComponent {
  @Output() action: EventEmitter<number> = new EventEmitter();
  @Input() userId: number;

  onClick() {
    this.action.emit(this.userId);
  }
}
