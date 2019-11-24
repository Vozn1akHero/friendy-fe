import {Component, Input, OnInit} from '@angular/core';
import EventParticipantListItem from '../../event-page/models/event-participant-list-item.model';


@Component({
  selector: 'app-event-participant-modal-item',
  templateUrl: './event-participant-item.component.html',
  styleUrls: ['./event-participant-item.component.sass']
})
export class EventParticipantItemComponent implements OnInit {
  @Input() participantData: EventParticipantListItem;

  constructor() { }

  ngOnInit() {
  }

}
