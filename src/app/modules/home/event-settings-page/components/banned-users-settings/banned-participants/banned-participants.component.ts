import {Component, Input, OnInit} from '@angular/core';
import {EventParticipantService} from '../../../services/event-participant.service';
import EventBannedParticipantModel from '../../../models/event-banned-participant.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-banned-participants',
  templateUrl: './banned-participants.component.html',
  styleUrls: ['./banned-participants.component.scss']
})
export class BannedParticipantsComponent implements OnInit {
  @Input() eventId: number;
  loaded: boolean;
  bannedUsers: EventBannedParticipantModel[];

  constructor(private eventParticipantService: EventParticipantService) {
    this.loaded = false;
  }

  ngOnInit() {
    this.setBannedParticipantList();
  }

  setBannedParticipantList(){
    this.eventParticipantService.getBanned(this.eventId)
      .pipe(take(1))
      .subscribe(res => {
      this.bannedUsers = res;
      this.loaded = true;
    })
  }

  unbanParticipant($event: EventBannedParticipantModel) {
    this.eventParticipantService.unbanParticipant(this.eventId, $event.id)
      .pipe(take(1))
      .subscribe(res => {

      })
  }
}
