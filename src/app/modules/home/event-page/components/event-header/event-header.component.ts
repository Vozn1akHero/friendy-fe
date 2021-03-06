import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import EventShortened from "../../models/event-shortened.model";
import * as EventPageEventDataActions from "../../store/event-data/event-data.actions";
import { AppState } from "../../store/reducers";

@Component({
  selector: "app-event-header",
  templateUrl: "./event-header.component.html",
  styleUrls: ["./event-header.component.scss"]
})
export class EventHeaderComponent implements OnInit {
  @Input() isEventAdmin: boolean;
  eventDataLoaded$: Observable<boolean>;
  eventData$: Observable<EventShortened>;
  eventId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.eventId = +this.activatedRoute.snapshot.paramMap.get("id");
    this.getEventData();
  }

  getEventData() {
    this.store.dispatch(
      new EventPageEventDataActions.GetEventData({ id: this.eventId })
    );
    this.eventData$ = this.store.select(
      e => e.eventPageEventData.events[this.eventId]
    );
    this.eventDataLoaded$ = this.store.select(
      e => e.eventPageEventData.events[this.eventId] !== null
    );
  }
}
