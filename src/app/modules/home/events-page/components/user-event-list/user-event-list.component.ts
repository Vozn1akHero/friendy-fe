import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subscription} from 'rxjs';
import {EventType} from '../../enums/event-types.enum';
import * as EventsPageAdministeredEventsActions from '../../store/administered-events/administered-events.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

@Component({
  selector: 'app-user-event-list',
  templateUrl: './user-event-list.component.html',
  styleUrls: ['./user-event-list.component.scss']
})
export class UserEventListComponent implements OnInit, OnDestroy {
  chosenEventTypeSubscription: Subscription;

  chosenSubpage: EventType;
  administeredType: EventType = EventType.Administered;
  participatingType: EventType = EventType.Participating;

  constructor(private renderer: Renderer2,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>) { }

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
