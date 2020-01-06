import { Component, OnInit } from '@angular/core';
import {ExemplaryEventsService} from '../../services/exemplary-events.service';
import {Observable} from 'rxjs';
import Event from '../../models/event.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-suggested-events-panel',
  templateUrl: './suggested-events-panel.component.html',
  styleUrls: ['./suggested-events-panel.component.scss']
})
export class SuggestedEventsPanelComponent implements OnInit {
  exemplaryEvents$: Observable<Event[]>;

  constructor(private exemplaryEventsService : ExemplaryEventsService) { }

  ngOnInit() {
    this.getExemplaryEvents();
    this.setExemplaryEvents();
  }

  getExemplaryEvents(){
    this.exemplaryEventsService.getExemplary().pipe(take(1)).subscribe();
  }

  setExemplaryEvents(){
    this.exemplaryEvents$ = this.exemplaryEventsService.exemplaryEvents$;
  }
}
