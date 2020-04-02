import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import SubscriptionManager from "@app/shared/helpers/SubscriptionManager";
import { ScrollableListNotifierService } from "@app/shared/services/scrollable-list-notifier.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { EventParticipant } from "src/app/shared/models/event-participant.model";
import * as ParticipantActions from "../../store/participants/participants.actions";
import { AppState } from "./../../store/reducers";

@Component({
  selector: "app-participants-modal",
  templateUrl: "./participants-modal.component.html",
  providers: [ScrollableListNotifierService]
})
export class ParticipantsModalComponent implements OnInit, OnDestroy {
  loaded$: Observable<boolean>;
  eventParticipants$: Observable<EventParticipant[]>;
  @Input() eventId: number;
  @Output() closeModalEmitter: EventEmitter<void> = new EventEmitter();

  constructor(
    private store$: Store<AppState>,
    private subscriptionManager: SubscriptionManager,
    private scrollableListNotifierService: ScrollableListNotifierService
  ) {}

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }

  ngOnInit() {
    this.subscriptionManager.add(
      this.store$
        .select(e => e.eventPageParticipants.currentPage[this.eventId])
        .subscribe(value => {
          if (value != null) {
            this.scrollableListNotifierService.currentPage = value;
          }
        })
    );
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

  fill() {
    console.log(this.scrollableListNotifierService.currentPage);
    this.store$.dispatch(
      new ParticipantActions.StartFilling({
        id: this.eventId,
        page: this.scrollableListNotifierService.currentPage
      })
    );
  }

  closePopup() {
    this.closeModalEmitter.emit();
  }
}
