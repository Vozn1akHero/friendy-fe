import { Component, OnInit } from '@angular/core';
import {ScrollableListNotifierService} from '../../../shared/services/scrollable-list-notifier.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-settings-page',
  templateUrl: './event-settings-page.component.html',
  styleUrls: ['./event-settings-page.component.scss'],
  providers: [
    ScrollableListNotifierService
  ]
})
export class EventSettingsPageComponent implements OnInit {
  previousQueryParam: string;
  currentQueryParam: string;

  constructor(private route: ActivatedRoute,
              private scrollableListNotifierService: ScrollableListNotifierService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.scrollableListNotifierService.reset();
    })
  }

  updateList() {
    console.log(1)
    this.scrollableListNotifierService.notify();
  }
}
