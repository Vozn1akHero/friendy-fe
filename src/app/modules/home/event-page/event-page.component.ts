import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {OpenSettingsService} from './services/opensettings.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import * as UserDataActions from './store/event-data/event-data.actions';
import {Subscription} from 'rxjs';
import EventShortened from './models/event-shortened.model';

@Component({
  selector: 'app-event',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  isEventAdmin: boolean;

  constructor(private router : ActivatedRoute,
              private store: Store<fromApp.AppState>,
              private openSettingsService: OpenSettingsService) {}

  ngOnInit() {
    this.isEventAdmin = this.router.snapshot.data.isEventAdmin;
  }

  ngOnDestroy(): void {
    this.openSettingsService.openedSettingsValueChanged.unsubscribe();
  }
}
