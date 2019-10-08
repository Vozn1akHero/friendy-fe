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
  chosenEventTypeSubscription: Subscription;




  chosenSubpage: EventType;
  administeredType: EventType = EventType.Administered;
  participatingType: EventType = EventType.Participating;


  constructor(private renderer: Renderer2,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.chosenEventTypeSubscription = this.activatedRoute.fragment.subscribe(fragment => {
        let chosenSubpage = new URLSearchParams(fragment).get('ev_t');
        switch (chosenSubpage) {
          case 'administered':
            this.chosenSubpage = EventType.Administered;
            break;
          case 'participating':
            this.chosenSubpage = EventType.Participating;
        }

        if (this.chosenSubpage !== EventType.Administered
          && this.chosenSubpage !== EventType.Participating) {
          this.router.navigate(['.'], {
            fragment: 'ev_t=participating',
            relativeTo: this.activatedRoute
          })
        }
      }
    );
  }

  openOrCloseEventCreationPopup() {
    this.eventCreationPopupOpened = !this.eventCreationPopupOpened;
  }

  showConcreteTypeOfEvents(chosenSubpage) {
    if(chosenSubpage === 'administered'){
      this.router.navigate(['.'], { fragment: 'ev_t=administered',
        relativeTo: this.activatedRoute })
    } else if(chosenSubpage === 'participating') {
      this.router.navigate(['.'], { fragment: 'ev_t=participating',
        relativeTo: this.activatedRoute })
    } else {
      this.router.navigate(['.'], { fragment: 'ev_t=participating',
        relativeTo: this.activatedRoute })
    }
  }

  searchEvents(keyword){
    console.log(keyword)
    if(this.chosenSubpage === EventType.Administered){
      this.store.dispatch(new EventsPageAdministeredEventsActions
        .FilterAdministeredEvents({ keyword }))
    } else if (this.chosenSubpage === EventType.Participating){

    }
  }

  ngOnDestroy(): void {
    this.chosenEventTypeSubscription.unsubscribe();
  }
}
