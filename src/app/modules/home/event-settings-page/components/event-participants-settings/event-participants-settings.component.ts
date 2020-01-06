import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-participants-settings',
  templateUrl: './event-participants-settings.component.html',
  styleUrls: ['./event-participants-settings.component.scss']
})
export class EventParticipantsSettingsComponent implements OnInit {
  @Input() eventId : number;

  constructor() { }

  ngOnInit() {
  }

}
