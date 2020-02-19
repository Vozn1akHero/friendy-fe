import { Component, OnInit } from '@angular/core';
import {EventAdminsService} from './services/event-admins.service';
import {EventCreationService} from '../events-page/services/event-creation.service';
import {EventDataService} from './services/event-data.service';
import {EventParticipantService} from './services/event-participant.service';
import {EventParticipationRequestService} from './services/event-participation-request.service';

@Component({
  selector: 'app-event-settings-page',
  templateUrl: './event-settings-page.component.html',
  styleUrls: ['./event-settings-page.component.scss']
})
export class EventSettingsPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

}
