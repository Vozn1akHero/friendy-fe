import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chosen-event-settings-subpage',
  templateUrl: './chosen-event-settings-subpage.component.html',
  styleUrls: ['./chosen-event-settings-subpage.component.scss']
})
export class ChosenEventSettingsSubpageComponent implements OnInit {
  chosenSubpage: number;
  eventId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
      if(value.sp == null || Array.of("basic", "participants", "admins").indexOf(value.sp) === -1){
        window.location.replace(`${window.location.origin}/app/event/${+this.route.snapshot.params.id}/settings?sp=basic`)
      }

      if(value.sp === "basic"){
        this.chosenSubpage = 1;
      } else if(value.sp === "participants"){
        this.chosenSubpage = 2;
      } else if(value.sp === "admins"){
        this.chosenSubpage = 3;
      }
    });

    this.eventId = this.route.snapshot.params.id;
  }
}

