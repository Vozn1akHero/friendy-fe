import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OpenSettingsService} from '../../../services/opensettings.service';

@Component({
  selector: 'app-event-header-eventinfo',
  templateUrl: './event-header-eventinfo.component.html',
  styleUrls: ['./event-header-eventinfo.component.scss']
})
export class EventHeaderEventinfoComponent implements OnInit {
  @Input() activeSettings;

  constructor(private openSettingsService: OpenSettingsService) { }

  ngOnInit() {
  }

  openEventInnerSettings(): void {
    this.activeSettings = !this.activeSettings;
    this.openSettingsService.openedSettingsValueChanged.next(this.activeSettings);
  }

}
