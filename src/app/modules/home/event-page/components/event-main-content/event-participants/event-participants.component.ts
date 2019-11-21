import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {EventParticipantService} from '../../../services/event-participant.service';
import {ActivatedRoute, Router} from '@angular/router';
import EventExemplaryParticipant from '../../../models/event-exemplary-participant.model';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss']
})
export class EventParticipantsComponent implements OnInit, OnDestroy {
  @Input() isEventAdmin: boolean;
  eventParticipantsSubscription: Subscription;
  eventParticipantsLoaded: boolean = false;
  eventParticipants: EventExemplaryParticipant[];
  activatedRoute: string;

  constructor(private route : ActivatedRoute,
              private router: Router,
              private eventParticipantService : EventParticipantService) { }

  ngOnInit() {
    this.activatedRoute = this.router.url;
    this.getParticipants();
  }

  getParticipants(){
    this.eventParticipantsSubscription = this.eventParticipantService.getExemplary(this.route.snapshot.params.id)
      .subscribe(value => {
        this.eventParticipants = value;
        this.eventParticipantsLoaded = true;
    })
  }

  ngOnDestroy(): void {
    this.eventParticipantsSubscription.unsubscribe();
  }
}
