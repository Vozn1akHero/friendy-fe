import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {OpenSettingsService} from './services/opensettings.service';

@Component({
  selector: 'app-event',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  eventId;

  constructor(private router : ActivatedRoute,
              private openSettingsService: OpenSettingsService) {
    console.log(this.router.params.pipe(map(p => p.id)));
    this.eventId = this.router.snapshot.params.id;
  }

  ngOnInit() {
    /*this.openSettingsService.openedSettingsValueChanged.subscribe((data : boolean) => {
      this.activeSettings = data;
    });*/
  }

  ngOnDestroy(): void {
    this.openSettingsService.openedSettingsValueChanged.unsubscribe();
  }
}
