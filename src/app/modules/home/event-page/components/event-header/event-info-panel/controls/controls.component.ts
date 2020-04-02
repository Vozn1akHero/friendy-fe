import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserIdService } from "../../../../../../../shared/services/user-id.service";
import { PARTICIPATION_STATUS } from "../../../../models/participation-status.enum";
import * as ParticipationStatusActions from "../../../../store/participation/participation.actions";
import { AppState } from "../../../../store/reducers";

@Component({
  selector: "app-event-info-panel-controls",
  templateUrl: "./controls.component.html",
  styleUrls: ["./controls.component.scss"]
})
export class ControlsComponent implements OnInit {
  @Input() eventId: number;
  userId: number;
  participationStatus$: Observable<PARTICIPATION_STATUS>;
  participationStatusLoaded$: Observable<boolean>;
  participantStatus: PARTICIPATION_STATUS = PARTICIPATION_STATUS.Participant;
  nonParticipantStatus: PARTICIPATION_STATUS =
    PARTICIPATION_STATUS.NonParticipant;
  bannedParticipantStatus: PARTICIPATION_STATUS = PARTICIPATION_STATUS.Banned;
  //isCurrentUserParticipantSubscription: Subscription;

  constructor(
    private userIdService: UserIdService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.userId = this.userIdService.userIdValue;
    this.getUserParticipationStatus();
  }

  getUserParticipationStatus() {
    this.store.dispatch(
      new ParticipationStatusActions.Get({ eventId: this.eventId })
    );
    this.participationStatusLoaded$ = this.store.select(
      e => e.eventPageParticipation.loaded
    );
    this.participationStatus$ = this.store.select(
      e => e.eventPageParticipation.participationStatus
    );
  }

  leave() {
    this.store.dispatch(
      new ParticipationStatusActions.Leave({ eventId: this.eventId })
    );
  }

  removeParticipationRequest() {
    this.store.dispatch(
      new ParticipationStatusActions.RemoveRequest({ eventId: this.eventId })
    );
  }

  sendParticipationRequest() {
    this.store.dispatch(
      new ParticipationStatusActions.SendRequest({ eventId: this.eventId })
    );
  }
}
