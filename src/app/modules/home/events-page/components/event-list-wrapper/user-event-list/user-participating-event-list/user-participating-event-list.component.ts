import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import Event from '../../../../models/event.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../../core/ngrx/store/app.reducer';
import * as EventsPageUserEventsActions from '../../../../store/user-events/user-events.actions';

@Component({
  selector: 'app-user-participating-event-list',
  templateUrl: './user-participating-event-list.component.html',
  styleUrls: ['./user-participating-event-list.component.scss']
})
export class UserParticipatingEventListComponent implements OnInit, OnDestroy {
  userEventsLoaded$: Observable<boolean>;
  events: Event[];
  eventsSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.getEventList();
  }

  getEventList(){
    this.userEventsLoaded$ = this.store.select(state => state.eventsPageUserEvents.loaded);

    this.store.dispatch(new EventsPageUserEventsActions.GetEvents());

    this.eventsSubscription = this.store.select(state => state.eventsPageUserEvents.events)
      .subscribe(events => {
        this.events = events;
      });
  }

  leave(id: number) {
    this.store.dispatch(new EventsPageUserEventsActions.LeaveEvent({id}))
  }

  apply(id: number) {

  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }
}
