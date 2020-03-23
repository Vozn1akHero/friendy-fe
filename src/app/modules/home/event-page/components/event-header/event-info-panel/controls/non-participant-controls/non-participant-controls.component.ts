import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable } from "rxjs";
import { PARTICIPATION_STATUS } from "../../../../../models/participation-status.enum";

@Component({
  selector: "app-non-participant-controls",
  templateUrl: "./non-participant-controls.component.html",
  styleUrls: ["./non-participant-controls.component.scss"]
})
export class NonParticipantControlsComponent {
  @Input() participationStatus$: Observable<PARTICIPATION_STATUS>;
  nonParticipantStatus: PARTICIPATION_STATUS.NonParticipant;
  bannedParticipantStatus: PARTICIPATION_STATUS.Banned;
  requestSentStatus: PARTICIPATION_STATUS.RequestSent;
  @Output() sendRequestEmitter: EventEmitter<void> = new EventEmitter();
  @Output() removeRequestEmitter: EventEmitter<void> = new EventEmitter();

  onJoinUpBtnClick() {
    this.sendRequestEmitter.emit();
  }

  onRemoveRequestBtnClick() {
    this.removeRequestEmitter.emit();
  }
}
