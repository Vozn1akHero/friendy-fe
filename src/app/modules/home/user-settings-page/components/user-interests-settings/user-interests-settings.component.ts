import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDataService} from '../../services/user-data.service';
import {Observable} from 'rxjs';
import UserInterestModel from '../../models/user-interest.model';

@Component({
  selector: 'app-user-interests-settings',
  templateUrl: './user-interests-settings.component.html',
  styleUrls: ['./user-interests-settings.component.scss']
})
export class UserInterestsSettingsComponent implements OnInit {
/*  userInterestsSettings = new FormGroup({
    education: new FormControl('', [Validators.required]),
    interests: new FormControl('', [Validators.required]),
    school: new FormControl('', [Validators.required]),
    university: new FormControl('', [Validators.required]),
    maritalStatus: new FormControl('', [Validators.required]),
    religion: new FormControl('', [Validators.required]),
    alcoholAttitude: new FormControl('', [Validators.required]),
    smokingAttitude: new FormControl('', [Validators.required]),
  });*/

  userInterests$: Observable<UserInterestModel[]>;
  userInterestsSubscription: Observable<UserInterestModel[]>;
  userInterests: string[];

  constructor(private userDataService : UserDataService) { }

  ngOnInit() {
    this.getCurrentAddData();
  }

  getCurrentAddData(){
    this.userInterests$ = this.userDataService.userInterests$;
  }

  removeInterest(id: number) {
    
  }
}
