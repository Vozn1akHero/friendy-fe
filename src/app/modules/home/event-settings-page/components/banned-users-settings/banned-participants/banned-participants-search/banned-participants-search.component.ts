import {Component, OnInit, ViewChild} from '@angular/core';
import {EventParticipantService} from '../../../../services/event-participant.service';

@Component({
  selector: 'app-banned-participants-search',
  templateUrl: './banned-participants-search.component.html',
  styleUrls: ['./banned-participants-search.component.scss']
})
export class BannedParticipantsSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput;

  constructor(private eventParticipantService : EventParticipantService) { }

  ngOnInit() {
  }

  searchParticipants(){
    //this.eventParticipantService.filterByKeyword(this.searchInput.nativeElement.textContent);
  }
}
