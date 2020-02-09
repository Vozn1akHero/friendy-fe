import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import EventParticipantDetailed from '../../models/event-participant-detailed.model';
import {EventParticipantService} from '../../services/event-participant.service';

@Component({
  selector: 'app-event-participants-settings',
  templateUrl: './event-participants-settings.component.html',
  styleUrls: ['./event-participants-settings.component.scss']
})
export class EventParticipantsSettingsComponent implements OnInit {
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
