import {Component, Input, OnInit} from '@angular/core';
import EventExemplaryParticipant from '../../../../models/event-exemplary-participant.model';

@Component({
  selector: 'app-event-participants-item',
  templateUrl: './event-participants-item.component.html',
  styleUrls: ['./event-participants-item.component.scss']
})
export class EventParticipantsItemComponent {
  @Input() eventParticipant: EventExemplaryParticipant;

  constructor() { }
}
