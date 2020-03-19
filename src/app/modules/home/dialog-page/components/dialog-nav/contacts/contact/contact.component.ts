import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FriendModel } from "../../../../models/friend.model";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  @Input() contact: FriendModel;
  @Output() onClickEmitter: EventEmitter<number> = new EventEmitter();

  onClick() {
    this.onClickEmitter.emit(this.contact.id);
  }
}
