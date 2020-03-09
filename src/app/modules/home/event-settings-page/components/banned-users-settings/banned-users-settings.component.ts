import {Component, Input, OnInit} from '@angular/core';
import EventBannedParticipantModel from '../../models/event-banned-participant.model';
import {EventParticipantService} from '../../services/event-participant.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-banned-users-settings',
  templateUrl: './banned-users-settings.component.html',
  styleUrls: ['./banned-users-settings.component.scss']
})
export class BannedUsersSettingsComponent implements OnInit {
  @Input() eventId: number;
  loaded: boolean;
  bannedUsers: EventBannedParticipantModel[];

  constructor(private eventParticipantService: EventParticipantService) {
    this.loaded = false;
  }

  ngOnInit() {
    this.setBannedParticipantList();
  }

  setBannedParticipantList() {
    this.eventParticipantService.getBanned(this.eventId)
      .pipe(take(1))
      .subscribe(res => {
        this.bannedUsers = res;
        this.loaded = true;
      })
  }

  unbanParticipant(id: number) {
    this.eventParticipantService.unbanParticipant(this.eventId, id)
      .subscribe(res => {

      })
  }

  searchParticipants(value: string) {
    this.eventParticipantService.filterByKeyword(this.eventId, value, 1, 20);
  }
}
