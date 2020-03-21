import { EventParticipant } from "src/app/shared/models/event-participant.model";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-event-participants-item",
  templateUrl: "./event-participants-item.component.html",
  styleUrls: ["./event-participants-item.component.scss"]
})
export class EventParticipantsItemComponent {
  @Input() eventParticipant: EventParticipant;

  constructor() {}
}
