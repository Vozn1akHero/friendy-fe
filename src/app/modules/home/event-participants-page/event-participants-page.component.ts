import { Component, OnInit } from '@angular/core';
import EventParticipantListItem from '../event-page/models/event-participant-list-item.model';
import {EventParticipantService} from '../event-page/services/event-participant.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {ScrollableListNotifierService} from '../../../shared/services/scrollable-list-notifier.service';

@Component({
  selector: 'app-event-participants-page',
  templateUrl: './event-participants-page.component.html',
  styleUrls: ['./event-participants-page.component.sass'],
  providers: [ScrollableListNotifierService]
})
export class EventParticipantsPageComponent implements OnInit {
  participants$: Observable<EventParticipantListItem[]>;
  participantsLoaded$: Observable<boolean>;

  constructor(private eventParticipantService : EventParticipantService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.setParticipantsLoaded();
    this.getParticipants();
    this.setParticipants();
  }

  getParticipants(){
    this.eventParticipantService.getRange(+this.route.snapshot.paramMap.get("id"), 1, 10);
  }

  setParticipants(){
    this.participants$ = this.eventParticipantService.eventParticipants$;
  }

  setParticipantsLoaded(){
    this.participantsLoaded$ = this.eventParticipantService.eventParticipantsLoaded$;
  }
}
