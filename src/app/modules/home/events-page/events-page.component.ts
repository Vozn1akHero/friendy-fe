import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import Event from './models/event.model';
import {State, Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import * as EventsPageUserEventsActions from './store/user-events/user-events.actions';
import * as EventsPageAdministeredEventsActions from './store/administered-events/administered-events.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {EventType} from './enums/event-types.enum';

@Component({
  selector: 'app-events',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit, OnDestroy {
  eventCreationPopupOpened = false;
  searchSubpageActivated: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

  }

  setSelectedSubpage(){
    this.searchSubpageActivated = this.route.snapshot.queryParams.search_act == 'true';
  }

  openOrCloseEventCreationPopup() {
    this.eventCreationPopupOpened = !this.eventCreationPopupOpened;
  }

  ngOnDestroy(): void {

  }
}
