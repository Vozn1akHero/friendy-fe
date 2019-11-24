import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chosen-event-settings-subpage',
  templateUrl: './chosen-event-settings-subpage.component.html',
  styleUrls: ['./chosen-event-settings-subpage.component.scss']
})
export class ChosenEventSettingsSubpageComponent implements OnInit {
  chosenSubpage: number;

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
/*      if(value.sp == null || Array.of("basic", "participants", "admins").indexOf(value.sp) === -1){
        this.router.navigate([`${this.router.url}?sp=basic`]);
      }*/
console.log(value.sp)
      if(value.sp === "basic"){
        this.chosenSubpage = 1;
      } else if(value.sp === "participants"){
        this.chosenSubpage = 2;
      } else if(value.sp === "admins"){
        this.chosenSubpage = 3;
      }
    })
  }
}

