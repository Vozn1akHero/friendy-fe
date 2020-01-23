import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import EventBannedParticipantModel from '../../../../models/event-banned-participant.model';

@Component({
  selector: 'app-banned-participant',
  templateUrl: './banned-participant.component.html',
  styleUrls: ['./banned-participant.component.scss']
})
export class BannedParticipantComponent {
  @Input() bannedParticipant: EventBannedParticipantModel;
  @Output() unbanParticipantEmitter: EventEmitter<EventBannedParticipantModel>;

  constructor(){
    this.unbanParticipantEmitter = new EventEmitter();
  }

  unbanParticipant(){
    this.unbanParticipantEmitter.emit(this.bannedParticipant);
  }
}
