import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EventParticipationRequestService} from '../../../../../services/event-participation-request.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-non-participant-controls',
  templateUrl: './non-participant-controls.component.html',
  styleUrls: ['./non-participant-controls.component.scss']
})
export class NonParticipantControlsComponent implements OnInit, OnDestroy {
  @Input() userId: number;
  @Input() eventId: number;

  isParticipationRequestSent: boolean;
  isParticipationRequestSentLoaded: boolean = false;
  isParticipationRequestSentSubscription: Subscription;

  constructor(private eventParticipationRequestService: EventParticipationRequestService) {}

  ngOnInit() {
    this.getRequestStatus();
  }

  onJoinUpBtnClick() {
    this.eventParticipationRequestService.send(this.eventId, this.userId).subscribe(value => {
      this.isParticipationRequestSent = true;
    })
  }

  onRemoveRequestBtnClick(){
    this.eventParticipationRequestService.delete(this.eventId, this.userId).subscribe(value => {
      this.isParticipationRequestSent = false;
    })
  }

  getRequestStatus(){
    this.isParticipationRequestSentSubscription = this
      .eventParticipationRequestService
      .getStatus(this.eventId, this.userId).subscribe(value => {
      this.isParticipationRequestSent = value.body as boolean;
      this.isParticipationRequestSentLoaded = true;
    })
  }

  ngOnDestroy(): void {
    this.isParticipationRequestSentSubscription.unsubscribe();
  }
}
