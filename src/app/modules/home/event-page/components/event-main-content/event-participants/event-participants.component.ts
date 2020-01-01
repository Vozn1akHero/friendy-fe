import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {EventParticipantService} from '../../../services/event-participant.service';
import {ActivatedRoute, Router} from '@angular/router';
import EventExemplaryParticipant from '../../../models/event-exemplary-participant.model';
import SubscriptionManager from '../../../../../../shared/helpers/SubscriptionManager';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss']
})
export class EventParticipantsComponent implements OnInit, OnDestroy {
  @Input() isEventAdmin: boolean;
  eventExemplaryParticipantsLoaded$: Observable<boolean>;
  eventExemplaryParticipants$: Observable<EventExemplaryParticipant[]>;
  activatedRoute: string;
  eventId: number;

  constructor(private route : ActivatedRoute,
              private router: Router,
              private subscriptionManager : SubscriptionManager,
              private eventParticipantService : EventParticipantService) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.params.id;
    this.activatedRoute = this.router.url;

    this.setExemplaryParticipantsLoaded();
    this.getExemplaryParticipants();
    this.setExemplaryParticipants();
  }

  getExemplaryParticipants(){
    this.subscriptionManager.add(this
      .eventParticipantService
      .getExemplary(this.eventId).subscribe());
  }

  setExemplaryParticipants(){
    this.eventExemplaryParticipants$ = this.eventParticipantService.eventExemplaryParticipants$;
  }

  setExemplaryParticipantsLoaded(){
    this.eventExemplaryParticipantsLoaded$ = this.eventParticipantService.eventExemplaryParticipantsLoaded$;
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
