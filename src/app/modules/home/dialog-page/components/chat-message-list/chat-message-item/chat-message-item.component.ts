import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";
import MessageInChatModel from "../../../models/message-in-chat.model";
import * as moment from "moment";

@Component({
  selector: "app-chat-message-item",
  templateUrl: "./chat-message-item.component.html",
  styleUrls: ["./chat-message-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageItemComponent implements OnInit {
  @Input() messageData: MessageInChatModel;
  @Input() profileId: number;
  @Output() imageClickEmitter: EventEmitter<string> = new EventEmitter();

  isUserAuthor: boolean;
  timePassed: string;

  constructor() {}

  ngOnInit() {
    this.timePassed = moment(this.messageData.date).fromNow();
    this.setIsUserAuthor();
  }

  onImageClick() {
    this.imageClickEmitter.emit(this.messageData.imageUrl);
  }

  setIsUserAuthor() {
    this.isUserAuthor = this.messageData.userId === this.profileId;
  }
}
