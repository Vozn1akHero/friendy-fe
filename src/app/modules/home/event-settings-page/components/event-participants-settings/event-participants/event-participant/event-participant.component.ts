import {Component, Input, OnInit} from '@angular/core';
import EventParticipantDetailed from '../../../../models/event-participant-detailed.model';

@Component({
  selector: 'app-event-participant',
  templateUrl: './event-participant.component.html',
  styleUrls: ['./event-participant.component.scss']
})
export class EventParticipantComponent implements OnInit {
  @Input() eventParticipant: EventParticipantDetailed;

  constructor() { }

  ngOnInit() {
  }

}
