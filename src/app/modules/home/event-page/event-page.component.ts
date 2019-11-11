import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {OpenSettingsService} from './services/opensettings.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import * as UserDataActions from './store/event-data/event-data.actions';
import {Subscription} from 'rxjs';
import EventShortened from './models/event-shortened.model';

@Component({
  selector: 'app-event',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  eventId : number;

  eventDataSubscription: Subscription;
  eventData: EventShortened;

  constructor(private router : ActivatedRoute,
              private store: Store<fromApp.AppState>,
              private openSettingsService: OpenSettingsService) {
    console.log(this.router.params.pipe(map(p => p.id)));
  }

  ngOnInit() {
    /*this.eventId = this.router.snapshot.params['id'];
    this.store.dispatch(new UserDataActions.GetEventData({ id : this.eventId }));
    this.eventDataSubscription = this.store.select(e => e.eventPageEventData.events)
      .subscribe(events => {
      for(let event of events){
        if(event.id === this.eventId){
          this.eventData = event;
        }
      }
    });
    console.log(this.eventData);*/
  }

  ngOnDestroy(): void {
    this.openSettingsService.openedSettingsValueChanged.unsubscribe();
  }
}
