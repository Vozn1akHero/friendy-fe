import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EventParticipationRequestService} from '../../../../../services/event-participation-request.service';
import {Observable, Subscription} from 'rxjs';
import SubscriptionManager from '../../../../../../../../shared/helpers/SubscriptionManager';
import {PARTICIPATION_STATUS} from '../../../../../models/participation-status.enum';

@Component({
  selector: 'app-non-participant-controls',
  templateUrl: './non-participant-controls.component.html',
  styleUrls: ['./non-participant-controls.component.scss']
})
export class NonParticipantControlsComponent{
  @Input() participationStatus$: Observable<PARTICIPATION_STATUS>;
  nonParticipantStatus: PARTICIPATION_STATUS.NonParticipant;
  bannedParticipantStatus: PARTICIPATION_STATUS.Banned;
  requestSentStatus: PARTICIPATION_STATUS.RequestSent;
  @Output() sendRequestEmitter: EventEmitter<void> = new EventEmitter();
  @Output() removeRequestEmitter: EventEmitter<void> = new EventEmitter();

  constructor() {}

  onJoinUpBtnClick() {
    this.sendRequestEmitter.emit();
  }

  onRemoveRequestBtnClick(){
    this.removeRequestEmitter.emit();
  }
}
