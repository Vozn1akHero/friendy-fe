import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {EventParticipantService} from '../../../services/event-participant.service';
import {ActivatedRoute, Router} from '@angular/router';
import EventExemplaryParticipant from '../../../models/event-exemplary-participant.model';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss']
})
export class EventParticipantsComponent implements OnInit {
  @Input() isEventAdmin: boolean;
  eventExemplaryParticipantsLoaded$: Observable<boolean>;
  eventExemplaryParticipants$: Observable<EventExemplaryParticipant[]>;
  activatedRoute: string;
  eventId: number;

  constructor(private route : ActivatedRoute,
              private router: Router,
              private eventParticipantService : EventParticipantService) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.params.id;
    this.activatedRoute = this.router.url;

    this.setExemplaryParticipantsLoaded();
    this.getExemplaryParticipants();
    this.setExemplaryParticipants();
  }

  getExemplaryParticipants(){
    this.eventParticipantService.getExemplary(this.eventId);
  }

  setExemplaryParticipants(){
    this.eventExemplaryParticipants$ = this.eventParticipantService.eventExemplaryParticipants$;
  }

  setExemplaryParticipantsLoaded(){
    this.eventExemplaryParticipantsLoaded$ = this.eventParticipantService.eventExemplaryParticipantsLoaded$;
  }
}
