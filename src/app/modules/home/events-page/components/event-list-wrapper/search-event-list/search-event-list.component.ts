import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventSearchService} from '../../../services/event-search.service';
import {Observable, Subscription} from 'rxjs';
import Event from '../../../models/event.model';

@Component({
  selector: 'app-search-event-list',
  templateUrl: './search-event-list.component.html',
  styleUrls: ['./search-event-list.component.scss']
})
export class SearchEventListComponent implements OnInit, OnDestroy {
  foundEvents: Event[];
  foundEventsSub: Subscription;
  loaded: boolean = false;
  foundEventsLengthText: string;

  constructor(private eventSearchService : EventSearchService) { }

  ngOnInit() {
    this.getFoundEvents();
  }

  getFoundEvents(){
    this.foundEventsSub = this.eventSearchService.foundEvents$.subscribe(value => {
      this.foundEvents = value;
      this.foundEventsLengthText = `Znaleziono ${value.length} 
      ${[2,3,4].indexOf(value.length) === -1 ? 'wydarzeń' : 'wydarzenia'}`;
      this.loaded = true;
    })
  }

  ngOnDestroy(): void {
    this.foundEventsSub.unsubscribe();
  }
}
