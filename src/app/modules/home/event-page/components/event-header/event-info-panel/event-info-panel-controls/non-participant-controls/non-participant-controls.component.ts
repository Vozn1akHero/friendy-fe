import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EventParticipationRequestService} from '../../../../../services/event-participation-request.service';
import {Observable, Subscription} from 'rxjs';
import SubscriptionManager from '../../../../../../../../shared/helpers/SubscriptionManager';

@Component({
  selector: 'app-non-participant-controls',
  templateUrl: './non-participant-controls.component.html',
  styleUrls: ['./non-participant-controls.component.scss']
})
export class NonParticipantControlsComponent implements OnInit, OnDestroy {
  @Input() userId: number;
  @Input() eventId: number;

  isParticipationRequestSent$: Observable<boolean>;
  isParticipationRequestSentLoaded$: Observable<boolean>;

  constructor(private eventParticipationRequestService: EventParticipationRequestService,
              private subscriptionManager : SubscriptionManager) {}

  ngOnInit() {
    this.getRequestStatus();
    this.setRequestStatus();
  }

  onJoinUpBtnClick() {
    this.eventParticipationRequestService.send(this.eventId, this.userId).subscribe();
  }

  onRemoveRequestBtnClick(){
    this.eventParticipationRequestService.delete(this.eventId, this.userId).subscribe();
  }

  getRequestStatus(){
    this.subscriptionManager.add(this.eventParticipationRequestService
      .getStatus(this.eventId, this.userId).subscribe());
  }

  setRequestStatus(){
    this.isParticipationRequestSent$ = this.eventParticipationRequestService.sent$;
    this.isParticipationRequestSentLoaded$ = this.eventParticipationRequestService.sentLoaded$;
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
