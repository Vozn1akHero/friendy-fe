import { Component, Input } from "@angular/core";
import { EventParticipant } from "src/app/shared/models/event-participant.model";

@Component({
  selector: "app-event-participants-item",
  templateUrl: "./event-participants-item.component.html",
  styleUrls: ["./event-participants-item.component.scss"]
})
export class EventParticipantsItemComponent {
  @Input() eventParticipant: EventParticipant;

  constructor() {}
}
