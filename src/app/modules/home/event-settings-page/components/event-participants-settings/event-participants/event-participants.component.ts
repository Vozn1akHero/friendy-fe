import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
  @Input() eventId: number;
  @ViewChild('searchInput') searchInput;

  constructor(private eventParticipantService: EventParticipantService) { }

  ngOnInit() {
    this.setEventParticipantsLoaded();
    this.getEventParticipants();
    this.setEventParticipants();
  }

  getEventParticipants(){
    this.eventParticipantService.getRange(this.eventId, 1, 10);
  }

  setEventParticipants(){
    this.eventParticipants$ = this.eventParticipantService.eventParticipants$;
  }

  setEventParticipantsLoaded(){
    this.eventParticipantsLoaded$ = this.eventParticipantService.eventParticipantsLoaded$;
  }

  searchParticipants(value){
    this.eventParticipantService.filterByKeyword(value);
  }

  remove(id: number){

  }

  ban(id: number){

  }
}
