import { Component, OnInit } from '@angular/core';
import {EventParticipantService} from '../../../services/event-participant.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import EventParticipantDetailed from '../../../models/event-participant-detailed.model';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss']
})
export class EventParticipantsComponent implements OnInit {
  eventParticipants$: Observable<EventParticipantDetailed[]>;
  eventParticipantsLoaded$: Observable<boolean>;

  constructor(private eventParticipantService: EventParticipantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.setEventParticipantsLoaded();
    this.getEventParticipants();
    this.setEventParticipants();
  }

  getEventParticipants(){
    this.eventParticipantService.getRange(this.route.snapshot.params.id, 1, 10);
  }

  setEventParticipants(){
    this.eventParticipants$ = this.eventParticipantService.eventParticipants$;
  }

  setEventParticipantsLoaded(){
    this.eventParticipantsLoaded$ = this.eventParticipantService.eventParticipantsLoaded$;
  }
}
