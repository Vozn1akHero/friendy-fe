import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventSearchService} from '../../services/event-search.service';
import {Observable} from 'rxjs';
import Event from '../../models/event.model';

@Component({
  selector: 'app-search-event-list',
  templateUrl: './search-event-list.component.html',
  styleUrls: ['./search-event-list.component.scss']
})
export class SearchEventListComponent implements OnInit {
  keyword: string;
  foundEvents$: Observable<Event[]>;

  constructor(private route: ActivatedRoute, private eventSearchService : EventSearchService) { }

  ngOnInit() {
    this.setKeyword();
    this.searchEvents();
    this.getFoundEvents();
  }

  setKeyword(){
    this.keyword = this.route.snapshot.queryParams.keyword;
  }

  searchEvents(){
    this.eventSearchService.filterByKeyword(this.keyword).subscribe();
  }

  getFoundEvents(){
    this.foundEvents$ = this.eventSearchService.foundEvents$;
  }
}
