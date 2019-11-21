import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-event-modals',
  templateUrl: './event-modals.component.html',
  styleUrls: ['./event-modals.component.sass']
})
export class EventModalsComponent implements OnInit {
  queryParams: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(value => {
      this.queryParams = value;
      console.log(this.queryParams)
    })
  }
}
