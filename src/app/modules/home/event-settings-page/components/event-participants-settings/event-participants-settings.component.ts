import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import EventParticipantDetailed from '../../models/event-participant-detailed.model';
import {EventParticipantService} from '../../services/event-participant.service';
import {ScrollableListNotifierService} from '../../../../../shared/services/scrollable-list-notifier.service';

@Component({
  selector: 'app-event-participants-settings',
  templateUrl: './event-participants-settings.component.html',
  styleUrls: ['./event-participants-settings.component.scss']
})
export class EventParticipantsSettingsComponent implements OnInit {
  eventParticipants$: Observable<EventParticipantDetailed[]>;
  eventParticipantsLoaded$: Observable<boolean>;
  scrollableSub: Subscription;
  @Input() eventId: number;
  @ViewChild('searchInput') searchInput;
  searchKeyword: string = "";

  constructor(private eventParticipantService: EventParticipantService,
              private scrollableListNotifierService: ScrollableListNotifierService) { }

  ngOnInit() {
    this.getEventParticipants();
    this.setScrollListener();
  }

  getEventParticipants(){
    this.eventParticipantService.getRange(this.eventId, 1, 20);
    this.eventParticipants$ = this.eventParticipantService.eventParticipants$;
    this.eventParticipantsLoaded$ = this.eventParticipantService.eventParticipantsLoaded$;
  }

  searchParticipants(value){
    this.searchKeyword = value;
    if(this.searchKeyword.length > 0){
      this.eventParticipantService.filterByKeyword(this.eventId, this.searchKeyword, 1, 20);
      this.eventParticipants$ = this.eventParticipantService.foundEventParticipants$;
    } else {
      this.eventParticipants$ = this.eventParticipantService.eventParticipants$;
    }
  }

  setScrollListener(){
    this.scrollableSub = this.scrollableListNotifierService.endReached$.subscribe(value => {
      if(value){
        const page = this.scrollableListNotifierService.currentPage;
        if(this.searchKeyword.length > 0){
          this.eventParticipantService.filterByKeyword(this.eventId, this.searchKeyword, page, 20);
        } else {
          this.eventParticipantService.getRange(this.eventId, page, 20);
        }
        this.scrollableListNotifierService.setDefaultValue();
      }
    })
  }

  remove(id: number){

  }

  ban(id: number){

  }
}
