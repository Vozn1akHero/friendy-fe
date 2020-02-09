import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import EventAdminModel from '../../models/event-admin.model';
import {EventAdminsService} from '../../services/event-admins.service';

@Component({
  selector: 'app-event-admins-settings',
  templateUrl: './event-admins-settings.component.html',
  styleUrls: ['./event-admins-settings.component.scss']
})
export class EventAdminsSettingsComponent implements OnInit {
  eventAdmins$: Observable<EventAdminModel[]>;
  eventAdminsLoaded$: Observable<boolean>;
  @Input() eventId : number;

  constructor(private eventAdminsComponent: EventAdminsService) { }

  ngOnInit() {
    this.setEventAdminsLoaded();
    this.getEventAdmins();
    this.setEventAdmins();
  }

  getEventAdmins(){
    this.eventAdminsComponent.get(this.eventId);
  }

  setEventAdmins(){
    this.eventAdmins$ = this.eventAdminsComponent.eventAdmins$;
  }

  setEventAdminsLoaded(){
    this.eventAdminsLoaded$ = this.eventAdminsComponent.eventAdminsLoaded$;
  }

  searchAdmins(value){
    this.eventAdminsComponent.filterByKeyword(value);
  }

  remove(id: number){

  }
}
