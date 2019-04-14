import {Component, Input, OnInit} from '@angular/core';
import {OpensettingsService} from '../../../../shared/opensettings.service';

@Component({
  selector: 'app-event-page-settings-controls',
  templateUrl: './event-page-settings-controls.component.html',
  styleUrls: ['./event-page-settings-controls.component.scss']
})
export class EventPageSettingsControlsComponent implements OnInit {
  @Input() activeSettings;

  constructor(private opensettingsService: OpensettingsService) { }

  ngOnInit() {
  }

  openEventInnerSettings(): void {
    this.activeSettings = !this.activeSettings;
    this.opensettingsService.openedSettingsValueChanged.next(this.activeSettings);
  }
}
