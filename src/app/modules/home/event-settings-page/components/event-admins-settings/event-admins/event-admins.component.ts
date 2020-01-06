import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {EventAdminsService} from '../../../services/event-admins.service';
import EventAdminModel from '../../../models/event-admin.model';

@Component({
  selector: 'app-event-admins',
  templateUrl: './event-admins.component.html',
  styleUrls: ['./event-admins.component.scss']
})
export class EventAdminsComponent implements OnInit {
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
}
