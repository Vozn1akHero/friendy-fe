import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserDataService} from './services/user-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent implements OnInit {
  dataLoaded$: Observable<boolean>;

  constructor(private router : Router,
              private route: ActivatedRoute,
              private userDataService: UserDataService) {
    this.route.queryParams.subscribe(value => {
      if(value.sp == null || Array.of("basic",
        "interests",
        "other",
        "education",
        "safety").indexOf(value.sp) === -1){
        this.router.navigateByUrl('/app/settings?sp=basic')
      }
    })
  }

  getLoaded(){
    this.dataLoaded$ = this.userDataService.loaded$;
  }

  ngOnInit() {
    this.userDataService.getLoggedInUserData();
    this.getLoaded();
  }
}
