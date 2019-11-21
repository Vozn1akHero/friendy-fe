import { Component, OnInit } from '@angular/core';
import EventParticipantListItem from '../../models/event-participant-list-item.model';
import {EventParticipantService} from '../../services/event-participant.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-participants-page',
  templateUrl: './event-participants-page.component.html',
  styleUrls: ['./event-participants-page.component.sass']
})
export class EventParticipantsPageComponent implements OnInit {
  participants: EventParticipantListItem[];
  participantsLoaded: boolean;

  constructor(private eventParticipantService : EventParticipantService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(){
    this.eventParticipantService.getRange(+this.route.snapshot.paramMap.get("id"), 1, 10)
      .subscribe(value => {
        this.participants = value;
        this.participantsLoaded = true;
      });
  }
}
