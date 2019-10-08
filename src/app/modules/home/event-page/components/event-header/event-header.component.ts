import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import Event from '../../../events-page/models/event.model';
import EventShortened from '../../models/event-shortened.model';
import * as EventPageEventDataActions from '../../store/event-data/event-data.actions'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit, OnDestroy {
  @Input() activeSettings;

  eventDataLoaded$: Observable<boolean>;
  eventData: EventShortened = null;
  eventDataSubscription: Subscription;
  componentLoading: boolean = true;
  eventId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>){}

  ngOnInit(): void {
   // this.eventDataLoaded$ = this.store.select(state => state.eventPageEventData.loaded);

    this.eventId = +this.activatedRoute.snapshot.paramMap.get("id");

    this.eventDataSubscription = this.store.select(state => state.eventPageEventData.events)
      .subscribe(events => {
        events.map(event => {
          if(event.id === this.eventId){
            this.eventData = event;
          }
        });
        console.log(this.eventData)
        if(this.eventData == null){
          this.store.dispatch(new EventPageEventDataActions.GetEventData({id: this.eventId}));
        }
      });
  }

  ngOnDestroy(): void {
    this.eventDataSubscription.unsubscribe();
  }
}
