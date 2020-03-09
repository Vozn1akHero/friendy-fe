import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventSearchService} from '../../../services/event-search.service';
import {ReplaySubject, Subscription} from 'rxjs';
import Event from '../../../models/event.model';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-search-event-list',
  templateUrl: './search-event-list.component.html',
  styleUrls: ['./search-event-list.component.scss']
})
export class SearchEventListComponent implements OnInit, OnDestroy {
  foundEvents: Event[];
  destroyed$ : ReplaySubject<boolean> = new ReplaySubject(1);
  searchActive: boolean = false;
  loaded: boolean = false;
  foundEventsLengthText: string;

  constructor(private eventSearchService : EventSearchService) { }

  ngOnInit() {
    this.getInitialEventList();
  }

  getInitialEventList(){

  }

  getFoundEvents(){
    this.eventSearchService.foundEvents$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(value => {
      this.foundEvents = value;
      this.foundEventsLengthText = `Znaleziono ${value.length} 
      ${[2,3,4].indexOf(value.length) === -1 ? 'wydarzeń' : 'wydarzenia'}`;
      this.loaded = true;
      this.searchActive = true;
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
