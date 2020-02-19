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
  subpagesArr: string[];

  constructor(private route: ActivatedRoute) {
    this.subpagesArr = ["basic", "participants", "requests", "banned-participants", "admins"];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
      if(value.sp == null || this.checkSubpageExistence(value.sp)){
        window.location.replace(`${window.location.origin}/app/event/${+this.route.snapshot.params.id}/settings?sp=basic`)
      }

      this.setChosenSubpage(value.sp);
    });

    this.eventId = this.route.snapshot.params.id;
  }

  checkSubpageExistence(param: string){
    return this.subpagesArr.indexOf(param) === -1;
  }

  setChosenSubpage(param:string){
    this.chosenSubpage = this.subpagesArr.indexOf(param) + 1;
  }
}

