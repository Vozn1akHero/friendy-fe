import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { EventParticipant } from "src/app/shared/models/event-participant.model";
import * as ParticipantActions from "../../store/participants/participants.actions";
import { AppState } from "./../../store/reducers";

@Component({
  selector: "app-event-participants",
  templateUrl: "./event-participants.component.html",
  styleUrls: ["./event-participants.component.scss"]
})
export class EventParticipantsComponent implements OnInit {
  @Input() isEventAdmin: boolean;
  loaded$: Observable<boolean>;
  eventParticipants$: Observable<EventParticipant[]>;
  activatedRoute: string;
  @Input() eventId: number;
  @Output() openParticipantsModalEmitter: EventEmitter<
    void
  > = new EventEmitter();

  constructor(private router: Router, private store$: Store<AppState>) {}

  ngOnInit() {
    this.activatedRoute = this.router.url;
    this.store$.dispatch(
      new ParticipantActions.GetExemplary({ id: this.eventId })
    );
    this.loaded$ = this.store$.select(
      e => e.eventPageParticipants.exemplaryLoaded[this.eventId]
    );
    this.eventParticipants$ = this.store$.select(
      e => e.eventPageParticipants.initialParticipants[this.eventId]
    );
  }

  onLinkClick() {
    this.openParticipantsModalEmitter.emit();
  }

  openParticipantsModal() {
    this.openParticipantsModalEmitter.emit();
  }
}
