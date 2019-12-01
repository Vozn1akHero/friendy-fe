import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent implements OnInit {

  constructor(private router : Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(value => {
      if(value.sp == null || Array.of("basic", "interests", "safety").indexOf(value.sp) === -1){
        //window.location.replace(`${window.location.origin}/app/settings?sp=basic`)
        this.router.navigateByUrl('/app/settings?sp=basic')
      }
    })
  }

  ngOnInit() {

  }

}
