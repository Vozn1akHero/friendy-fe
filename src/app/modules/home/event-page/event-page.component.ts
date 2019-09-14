import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {OpensettingsService} from './shared/opensettings.service';

@Component({
  selector: 'app-event',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  eventId;
  activeSettings = false;

  constructor(private router : ActivatedRoute,
              private opensettingsService: OpensettingsService) {
    console.log(this.router.params.pipe(map(p => p.id)));
    this.eventId = this.router.snapshot.params.id;
  }

  ngOnInit() {
    this.opensettingsService.openedSettingsValueChanged.subscribe((data) => {
      this.activeSettings = data as boolean;
    });
  }

  ngOnDestroy(): void {
    this.opensettingsService.openedSettingsValueChanged.unsubscribe();
  }
}
