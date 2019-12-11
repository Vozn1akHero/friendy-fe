import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
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

  isCurrentUserParticipant$: Observable<boolean>;
  isCurrentUserParticipantLoaded$: Observable<boolean>;
  //isCurrentUserParticipantSubscription: Subscription;

  constructor(private userIdService: UserIdService,
              private router: Router,
              private eventParticipationStatusService: UserParticipationStatusService) { }

  ngOnInit() {
    this.userId = this.userIdService.userId;
    this.getUserParticipationStatus();
    this.setUserParticipationStatus();
  }

  getUserParticipationStatus(){
    this.eventParticipationStatusService
      .getUserParticipationStatus(this.eventId).subscribe();
  }

  setUserParticipationStatus(){
    this.isCurrentUserParticipant$ = this.eventParticipationStatusService.isUserParticipant$;
    this.isCurrentUserParticipantLoaded$ = this.eventParticipationStatusService.isUserParticipantLoaded$;
  }

  onStatusChangeByUser(status: boolean){

  }

  ngOnDestroy(): void {

  }
}
