import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {EventType} from '../../enums/event-types.enum';
import * as EventsPageAdministeredEventsActions from '../../store/administered-events/administered-events.actions';
import * as UserEventsPageEventsActions from '../../store/user-events/user-events.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

@Component({
  selector: 'app-user-event-list',
  templateUrl: './user-event-list.component.html',
  styleUrls: ['./user-event-list.component.scss']
})
export class UserEventListComponent implements OnInit{
  chosenSubpage: EventType;
  administeredType: EventType = EventType.Administered;
  participatingType: EventType = EventType.Participating;

  constructor(private renderer: Renderer2,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.checkChosenSubpageEventType();
  }

  checkChosenSubpageEventType(){
    this.activatedRoute.queryParams.subscribe(params => {
      const chosenSubpage = params["ev_t"];
      switch (chosenSubpage) {
        case 'administered':
          this.chosenSubpage = EventType.Administered;
          break;
        case 'participating':
          this.chosenSubpage = EventType.Participating;
      }
    })
  }

  showConcreteTypeOfEvents(chosenSubpage) {
    if(chosenSubpage === 'administered'){
      this.router.navigate(['.'], { queryParams: {
          'ev_t': 'administered'
        },
        relativeTo: this.activatedRoute })
    } else if(chosenSubpage === 'participating') {
      this.router.navigate(['.'], { queryParams: {
          'ev_t': 'participating'
        },
        relativeTo: this.activatedRoute })
    } else {
      this.router.navigate(['.'], { queryParams: {
          'ev_t': 'participating'
        },
        relativeTo: this.activatedRoute })
    }
  }

  searchEvents(keyword){
    if(keyword.length === 0){
      if(this.chosenSubpage === EventType.Administered){
        this.store.dispatch(new EventsPageAdministeredEventsActions.SetDefaultEvents());
      } else if (this.chosenSubpage === EventType.Participating){
        this.store.dispatch(new UserEventsPageEventsActions.SetDefaultEvents());
      }
    }
    if(this.chosenSubpage === EventType.Administered){
      this.store.dispatch(new EventsPageAdministeredEventsActions
        .FilterEvents({ keyword }));
      /*this.router.navigate(['.'], {
        queryParams: {
          sk: keyword,
          'ev_t': 'administered'
        },
        relativeTo: this.activatedRoute
      })*/
    } else if (this.chosenSubpage === EventType.Participating){
      this.store.dispatch(new UserEventsPageEventsActions
        .FilterEvents({ keyword }));
      /*this.router.navigate(['.'], {
        queryParams: {
          sk: keyword,
          'ev_t': 'participating'
        },
        relativeTo: this.activatedRoute
      })*/
    }
  }
}
