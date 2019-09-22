import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import Event from './models/event.model';
import {State, Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import * as EventsPageUserEventsActions from './store/user-events/user-events.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit, OnDestroy {
  searchEventsInputOpened = false;
  eventCreationPopupOpened = false;
  //daysOfMonth = this.getDaysOfMonth();
  typeOfEventsToShow = 'all';
  events$: Observable<Event[]>;
  eventsSubscription: Subscription;
  events: Event[];
  administeredEvents: Observable<Event[]>;
  userEventsLoading$: Observable<boolean>;
  chosenSubpage: string;
  /*getDaysOfMonth() {
    return Array.apply(null, Array(5)).map((_, i) => i + 1);
  }*/

  constructor(private renderer: Renderer2,
              private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>,
              private state: State<fromApp.AppState>) {
    this.activatedRoute.fragment.subscribe(fragment => {
      this.chosenSubpage = new URLSearchParams(fragment).get('access_token');
      console.log(this.chosenSubpage);
    })
  }

  ngOnInit() {
    //this.events$ = this.store.select(state => state.eventsPageUserEvents.events);
    this.userEventsLoading$ = this.store.select(state => state.eventsPageUserEvents.loading);
    //this.store.dispatch(new EventsPageUserEventsActions.GetEventsStart());

    this.eventsSubscription = this.store
      .select(state => state.eventsPageUserEvents.events)
      .subscribe(events => {
        if(events.length == 0){
          this.store.dispatch(new EventsPageUserEventsActions.GetEventsStart());
        }

        this.events = events;
      })
  }

  openOrCloseEventCreationPopup() {
    this.eventCreationPopupOpened = this.eventCreationPopupOpened === false;
  }

  showConcreteTypeOfEvents(value) {
    this.typeOfEventsToShow = value;
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }
}
