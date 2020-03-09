import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import EventAdminModel from '../../models/event-admin.model';
import {EventAdminsService} from '../../services/event-admins.service';
import EventParticipantDetailedModel from '../../models/event-participant-detailed.model';
import {ScrollableListNotifierService} from '../../../../../shared/services/scrollable-list-notifier.service';

@Component({
  selector: 'app-event-admins-settings',
  templateUrl: './event-admins-settings.component.html',
  styleUrls: ['./event-admins-settings.component.scss']
})
export class EventAdminsSettingsComponent implements OnInit {
  eventAdmins$: Observable<EventAdminModel[]>;
  eventAdminsLoaded$: Observable<boolean>;
  @Input() eventId : number;
  modalVisible: boolean;
  searchKeyword: string = "";
  scrollableSub: Subscription;

  constructor(private eventAdminsService: EventAdminsService,
              private scrollableListNotifierService: ScrollableListNotifierService) { }

  ngOnInit() {
    this.getEventAdmins();
    this.setScrollListener();
  }

  getEventAdmins(){
    this.eventAdminsService.getRange(this.eventId, 1, 20);
    this.eventAdmins$ = this.eventAdminsService.eventAdmins$;
    this.eventAdminsLoaded$ = this.eventAdminsService.eventAdminsLoaded$;
  }

  setScrollListener(){
    this.scrollableSub = this.scrollableListNotifierService.endReached$.subscribe(value => {
      if(value){
        const page = this.scrollableListNotifierService.currentPage;
        if(this.searchKeyword.length > 0){
          this.eventAdminsService.filterByKeyword(this.eventId, this.searchKeyword, page, 20);
        } else {
          this.eventAdminsService.getRange(this.eventId, page, 20);
        }
        this.scrollableListNotifierService.setDefaultValue();
      }
    })
  }

  searchAdmins(value){
    this.searchKeyword = value;
    if(this.searchKeyword.length>0){
      this.eventAdminsService.filterByKeyword(this.eventId, value, 1, 20);
    } else {
      this.eventAdminsService.getRange(this.eventId, 1, 20);
    }
  }

  removeById(id: number){
    this.eventAdminsService.deleteById(this.eventId, id);
  }

  add(user: EventParticipantDetailedModel){
    this.eventAdminsService.create(this.eventId, user);
  }

  toggleParticipantsModal() {
    this.modalVisible = !this.modalVisible;
  }
}
