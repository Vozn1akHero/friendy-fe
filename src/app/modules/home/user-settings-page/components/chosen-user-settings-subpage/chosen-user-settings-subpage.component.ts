import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chosen-user-settings-subpage',
  templateUrl: './chosen-user-settings-subpage.component.html',
  styleUrls: ['./chosen-user-settings-subpage.component.scss']
})
export class ChosenUserSettingsSubpageComponent implements OnInit {
  chosenSubpage: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
      if(value.sp === "basic"){
        this.chosenSubpage = 1;
      } else if(value.sp === "education"){
        this.chosenSubpage = 2;
      } else if(value.sp === "interests"){
        this.chosenSubpage = 3;
      } else if(value.sp === "other"){
        this.chosenSubpage = 4;
      } else if(value.sp === "safety"){
        this.chosenSubpage = 5;
      }
    })
  }
}
