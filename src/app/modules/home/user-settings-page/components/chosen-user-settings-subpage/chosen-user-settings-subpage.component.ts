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
      if(value.sp == null || Array.of("basic", "interests", "safety").indexOf(value.sp) === -1){
        window.location.replace(`${window.location.origin}/app/settings?sp=basic`)
      }

      if(value.sp === "basic"){
        this.chosenSubpage = 1;
      } else if(value.sp === "interests"){
        this.chosenSubpage = 2;
      } else if(value.sp === "safety"){
        this.chosenSubpage = 3;
      }
    })
  }
}
