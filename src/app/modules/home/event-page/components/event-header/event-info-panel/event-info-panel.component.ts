import {Component, Input, OnInit} from '@angular/core';
import {OpenSettingsService} from '../../../services/opensettings.service';
import EventShortened from '../../../models/event-shortened.model';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-event-header-event-info',
  templateUrl: './event-info-panel.component.html',
  styleUrls: ['./event-info-panel.component.scss']
})
export class EventInfoPanelComponent implements OnInit {
  @Input() activeSettings;
  @Input() eventData$ : Observable<EventShortened>;
  @Input() eventId: number;
  @Input() isEventAdmin: boolean;
  @Input() eventDataLoaded$: Observable<boolean>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToSettings() {
    this.router.navigate(["app/event", this.eventId, "settings"], {queryParams: {sp: 'basic'}})
  }
}
