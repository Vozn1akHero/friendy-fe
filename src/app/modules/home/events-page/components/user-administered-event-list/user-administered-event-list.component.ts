import {Component, OnDestroy, OnInit} from '@angular/core';
import Event from '../../models/event.model';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import * as EventsPageAdministeredEventsActions from '../../store/administered-events/administered-events.actions';

@Component({
  selector: 'app-user-administered-events-list',
  templateUrl: './user-administered-event-list.component.html',
  styleUrls: ['./user-administered-event-list.component.scss']
})
export class UserAdministeredEventListComponent implements OnInit, OnDestroy {
  administeredEvents: Event[];
  administeredEventsSubscription: Subscription;
  administeredEventsLoaded$: Observable<boolean>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.administeredEventsLoaded$ = this.store.select(state => state.eventsPageAdministeredEventsReducer.loaded);

    this.store.dispatch(new EventsPageAdministeredEventsActions.GetAdministeredEvents());
    this.administeredEventsSubscription = this.store.select(state => state
      .eventsPageAdministeredEventsReducer.administeredEvents)
      .subscribe(events => {
        this.administeredEvents = events;
      })
  }

  ngOnDestroy(): void {
    this.administeredEventsSubscription.unsubscribe();
  }
}
