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
  searchActivated: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.checkSearchActivated();
  }

  checkSearchActivated(){
    this.route.queryParams.subscribe(params => {
      let param = params["keyword"];
      let ev_t = params["ev_t"];
      if(param != null && param.length > 0) {
        this.searchActivated = true;
      } else if(ev_t != null && param == null) {
        if (ev_t !== 'administered'
          && ev_t !== 'participating') {
          this.router.navigate(['.'], {
            queryParams: {
              'ev_t': 'participating'
            },
            relativeTo: this.route
          })
        } else if(ev_t === 'administered' || ev_t === 'participating'){
          this.searchActivated = false;
        }
      } else {
        this.router.navigate(['.'], {
          queryParams: {
            'ev_t': 'participating'
          },
          relativeTo: this.route
        })
      }
    })
  }

  openOrCloseEventCreationPopup() {
    this.eventCreationPopupOpened = !this.eventCreationPopupOpened;
  }

  ngOnDestroy(): void {

  }
}
