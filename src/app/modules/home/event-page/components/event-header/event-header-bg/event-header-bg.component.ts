import {Component, Input, OnInit} from '@angular/core';
import {EventBackgroundService} from '../../../services/event-background.service';

@Component({
  selector: 'app-event-header-bg',
  templateUrl: './event-header-bg.component.html',
  styleUrls: ['./event-header-bg.component.scss']
})
export class EventHeaderBgComponent implements OnInit {
  @Input() activeSettings;
  @Input() backgroundUrl;

  constructor(private eventBackgroundService: EventBackgroundService) { }

  ngOnInit() {

  }
}
