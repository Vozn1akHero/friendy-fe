import { Component, Input, OnInit } from "@angular/core";
import EventParticipantListItem from "../../../models/event-participant-list-item.model";

@Component({
  selector: "app-event-participants-item",
  templateUrl: "./event-participants-item.component.html",
  styleUrls: ["./event-participants-item.component.scss"]
})
export class EventParticipantsItemComponent {
  @Input() eventParticipant: EventParticipantListItem;

  constructor() {}
}
