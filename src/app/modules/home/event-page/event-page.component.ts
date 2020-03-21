import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OpenSettingsService } from "./services/opensettings.service";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../core/ngrx/store/app.reducer";
import { Subscription } from "rxjs";
import { ScrollableListNotifierService } from "../../../shared/services/scrollable-list-notifier.service";
import { EventPostService } from "./services/event-post.service";
import { EventPhotoService } from "./services/event-photo.service";

@Component({
  selector: "app-event",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.scss"],
  providers: [ScrollableListNotifierService, EventPostService]
})
export class EventComponent implements OnInit, OnDestroy {
  isEventAdmin: boolean;
  eventId: number;
  activeSettings: boolean = false;
  activeSettingsSubscription: Subscription;
  participantsModalOpened: boolean;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private scrollableListNotifierService: ScrollableListNotifierService,
    private openSettingsService: OpenSettingsService
  ) {}

  ngOnInit() {
    this.eventId = +this.route.snapshot.paramMap.get("id");
    this.isEventAdmin = this.route.snapshot.data.isEventAdmin;
    this.activeSettingsSubscription = this.openSettingsService.openedSettingsValueChanged$.subscribe(
      value => {
        this.activeSettings = value;
      }
    );
  }

  toggleParticipantsModal() {
    this.participantsModalOpened = !this.participantsModalOpened;
  }

  ngOnDestroy(): void {
    this.activeSettingsSubscription.unsubscribe();
  }

  updateList() {
    this.scrollableListNotifierService.notify();
  }
}
