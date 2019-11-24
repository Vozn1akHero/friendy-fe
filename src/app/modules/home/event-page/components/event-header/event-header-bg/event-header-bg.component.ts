import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import EventBackground from '../../../models/event-background.model';
import {EventBackgroundService} from '../../../services/event-background.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-header-bg',
  templateUrl: './event-header-bg.component.html',
  styleUrls: ['./event-header-bg.component.scss']
})
export class EventHeaderBgComponent implements OnInit {
  @Input() activeSettings;
  eventId: number;
  eventBackgroundLoaded$ : Observable<boolean>;
  eventBackground$: Observable<EventBackground>;

  constructor(private eventBackgroundService: EventBackgroundService,
              private router : ActivatedRoute) { }

  ngOnInit() {
    this.eventId = +this.router.snapshot.paramMap.get("id");
    this.setEventBackgroundLoaded();
    this.getEventBackground();
    this.setEventBackground();
  }

  getEventBackground(){
    this.eventBackgroundService.get(this.eventId);
  }

  setEventBackground(){
    this.eventBackground$ = this.eventBackgroundService.eventBackground$;
  }

  setEventBackgroundLoaded(){
    this.eventBackgroundLoaded$ = this.eventBackgroundService.eventBackgroundLoaded$;
  }
}
