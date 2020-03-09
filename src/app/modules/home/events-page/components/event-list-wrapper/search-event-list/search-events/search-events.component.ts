import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedSectionService} from '../../../../services/activated-section.service';
import {EventSearchService} from '../../../../services/event-search.service';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.scss']
})
export class SearchEventsComponent implements OnInit {
  searchInputText : string;
  @Output() activateSearchEmitter: EventEmitter<void> = new EventEmitter();

  constructor(private activatedSectionService : ActivatedSectionService,
              private eventSearchService: EventSearchService) { }

  ngOnInit() {
  }

  searchEvents():void{
    if(this.searchInputText.length === 0){
      this.activatedSectionService.setParticipatingSection();
    } else {
      this.activateSearchEmitter.emit();
      this.eventSearchService.filterByKeyword(this.searchInputText, 1, 20).subscribe();
      this.activatedSectionService.setNonparticipatingEvents();
    }
  }
}
