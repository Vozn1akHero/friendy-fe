import {Component, OnInit} from '@angular/core';
import {ActivatedSectionService} from '../../../services/activated-section.service';
import {EventSearchService} from '../../../services/event-search.service';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.scss']
})
export class SearchEventsComponent implements OnInit {
  searchInputText : string;

  constructor(private activatedSectionService : ActivatedSectionService, private eventSearchService: EventSearchService) { }

  ngOnInit() {
  }

  searchEvents():void{
    if(this.searchInputText.length === 0){
      this.activatedSectionService.setParticipatingSection();
    } else {
      this.eventSearchService.filterByKeyword(this.searchInputText).subscribe();
      this.activatedSectionService.setNonparticipatingEvents();
    }
  }
}
