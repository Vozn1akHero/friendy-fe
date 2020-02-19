import {Component, Input, OnInit} from '@angular/core';
import {EventParticipationRequestService} from '../../services/event-participation-request.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import * as EventParticipationRequestActions from '../../store/participation-request/participation-request.actions';
import {ParticipationRequestModel} from '../../models/participation-request.model';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-participant-requests-settings',
  templateUrl: './participant-requests-settings.component.html',
  styleUrls: ['./participant-requests-settings.component.scss']
})
export class ParticipantRequestsSettingsComponent implements OnInit {
  @Input() eventId: number;
  participationRequests$: Observable<ParticipationRequestModel[]>;
  loaded$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.store.dispatch(new EventParticipationRequestActions.Get({
      eventId: this.eventId, page: 1
    }));
    this.participationRequests$ = this.store.select(e=>e.eventSettingsParticipationRequest.participantRequests);
    this.loaded$ = this.store.select(e=>e.eventSettingsParticipationRequest.loaded);
  }

  search(value: string) {

  }

  confirmRequest(issuerId: number) {
    this.store.dispatch(new EventParticipationRequestActions.Confirm({
      eventId: this.eventId, issuerId: issuerId
    }));
  }

  removeRequest(issuerId: number) {
    this.store.dispatch(new EventParticipationRequestActions.Delete({
      eventId: this.eventId, issuerId: issuerId
    }));
  }
}
