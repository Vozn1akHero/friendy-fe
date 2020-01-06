import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventSearchService} from '../../../services/event-search.service';
import {Observable} from 'rxjs';
import Event from '../../../models/event.model';

@Component({
  selector: 'app-search-event-list',
  templateUrl: './search-event-list.component.html',
  styleUrls: ['./search-event-list.component.scss']
})
export class SearchEventListComponent implements OnInit {
  foundEvents$: Observable<Event[]>;

  constructor(private eventSearchService : EventSearchService) { }

  ngOnInit() {
    this.getFoundEvents();
  }

  getFoundEvents(){
    this.foundEvents$ = this.eventSearchService.foundEvents$;
  }
}
