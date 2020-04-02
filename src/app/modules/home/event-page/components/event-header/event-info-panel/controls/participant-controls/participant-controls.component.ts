import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-participant-controls",
  templateUrl: "./participant-controls.component.html",
  styleUrls: ["./participant-controls.component.scss"]
})
export class ParticipantControlsComponent implements OnInit {
  @Output() leaveEmitter: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onLeaveBtnClick() {
    this.leaveEmitter.emit();
  }
}
