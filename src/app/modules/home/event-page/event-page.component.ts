import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OpenSettingsService} from './services/opensettings.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import {ScrollableListNotifierService} from "../../../shared/services/scrollable-list-notifier.service";

@Component({
  selector: 'app-event',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  isEventAdmin: boolean;
  activeSettings: boolean = false;
  activeSettingsSubscription: Subscription;

  constructor(private router : ActivatedRoute,
              private store: Store<fromApp.AppState>,
              private scrollableListNotifierService : ScrollableListNotifierService,
              private openSettingsService: OpenSettingsService) {}

  ngOnInit() {
    this.isEventAdmin = this.router.snapshot.data.isEventAdmin;
    this.activeSettingsSubscription = this.openSettingsService
      .openedSettingsValueChanged$.subscribe(value => {
      this.activeSettings = value;
    })
  }

  ngOnDestroy(): void {
    this.activeSettingsSubscription.unsubscribe();
  }

  updateList() {
    this.scrollableListNotifierService.notify();
  }
}
