import { AppState } from "./../../store/reducers";
import { Store } from "@ngrx/store";
import { EventParticipant } from "src/app/shared/models/event-participant.model";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { concat, Observable, Subscription } from "rxjs";
import * as ParticipantActions from "../../store/participants/participants.actions";

@Component({
  selector: "app-participants-modal",
  templateUrl: "./participants-modal.component.html",
  styleUrls: ["./participants-modal.component.scss"]
})
export class ParticipantsModalComponent implements OnInit {
  loaded$: Observable<boolean>;
  eventParticipants$: Observable<EventParticipant[]>;
  @Input() eventId: number;
  @Output() hideModal: EventEmitter<void> = new EventEmitter();

  constructor(private store$: Store<AppState>) {}

  ngOnInit() {
    this.store$.dispatch(
      new ParticipantActions.GetInitial({ id: this.eventId })
    );
    this.loaded$ = this.store$.select(
      e => e.eventPageParticipants.loaded[this.eventId]
    );
    this.eventParticipants$ = this.store$.select(
      e => e.eventPageParticipants.participants[this.eventId]
    );
  }

  closePopup() {
    this.hideModal.emit();
  }
}
