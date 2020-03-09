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
  loaded: boolean;
  eventExemplaryParticipants: EventExemplaryParticipant[];
  activatedRoute: string;
  eventId: number;

  constructor(private route : ActivatedRoute,
              private router: Router,
              private subscriptionManager : SubscriptionManager,
              private eventParticipantService : EventParticipantService) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.params.id;
    this.activatedRoute = this.router.url;
    this.getExemplaryParticipants();
  }

  getExemplaryParticipants(){
    this.subscriptionManager.add(this
      .eventParticipantService
      .getRange(this.eventId, 1, 3).subscribe(value => {
        this.eventExemplaryParticipants = value;
        this.loaded = true;
      }));
  }


  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
