import {Component, OnInit, ViewChild} from '@angular/core';
import {EventParticipantService} from '../../../../services/event-participant.service';

@Component({
  selector: 'app-event-participants-search',
  templateUrl: './event-participants-search.component.html',
  styleUrls: ['./event-participants-search.component.scss']
})
export class EventParticipantsSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput;

  constructor(private eventParticipantService : EventParticipantService) { }

  ngOnInit() {
  }

  searchParticipants(){
    this.eventParticipantService.filterByKeyword(this.searchInput.nativeElement.textContent);
  }
}
