import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import EventShortened from '../../models/event-shortened.model';
import * as EventPageEventDataActions from '../../store/event-data/event-data.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit, OnDestroy {
  @Input() isEventAdmin: boolean;

  eventDataLoading$: Observable<boolean>;
  eventData: EventShortened = null;
  eventDataSubscription: Subscription;

  eventId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>){}

  ngOnInit(): void {
    this.eventDataLoading$ = this.store.select(state => state.eventPageEventData.loading);

    this.eventId = +this.activatedRoute.snapshot.paramMap.get("id");

    this.getEventData();
  }

  getEventData(){
    this.eventDataSubscription = this.store.select(state => state.eventPageEventData.events)
      .subscribe(events => {
        const found = events.find(e => e.id === this.eventId);
        if(found == null){
          this.store.dispatch(new EventPageEventDataActions.GetEventData({id: this.eventId}));
        } else {
          this.eventData = found;
        }
      });
  }

  ngOnDestroy(): void {
    this.eventDataSubscription.unsubscribe();
  }
}
