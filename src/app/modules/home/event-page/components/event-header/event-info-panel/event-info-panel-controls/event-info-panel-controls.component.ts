import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {UserIdService} from '../../../../../../../shared/services/user-id.service';
import {Router} from '@angular/router';
import {UserParticipationStatusService} from '../../../../services/user-participation-status.service';
import {EventParticipantService} from '../../../../services/event-participant.service';
import {EventParticipationRequestService} from '../../../../services/event-participation-request.service';

@Component({
  selector: 'app-event-info-panel-controls',
  templateUrl: './event-info-panel-controls.component.html',
  styleUrls: ['./event-info-panel-controls.component.scss']
})
export class EventInfoPanelControlsComponent implements OnInit, OnDestroy {
  @Input() eventId: number;
  userId: number;

  isCurrentUserParticipant: boolean;
  isCurrentUserParticipantLoaded: boolean = false;
  isCurrentUserParticipantSubscription: Subscription;

  constructor(private userIdService: UserIdService,
              private router: Router,
              private eventParticipationStatusService: UserParticipationStatusService) { }

  ngOnInit() {
    this.userId = this.userIdService.userId;
    this.setUserParticipationStatus();
  }

  setUserParticipationStatus(){
    this.isCurrentUserParticipantSubscription = this.eventParticipationStatusService
      .getUserParticipationStatus(this.eventId)
      .subscribe(value => {
        this.isCurrentUserParticipant = value.body as boolean;
        this.isCurrentUserParticipantLoaded = true;
      })
  }

  ngOnDestroy(): void {
    this.isCurrentUserParticipantSubscription.unsubscribe();
  }
}
