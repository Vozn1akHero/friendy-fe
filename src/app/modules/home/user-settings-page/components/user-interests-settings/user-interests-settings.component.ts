import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  userInterests: string[];

  userEducationForm = new FormGroup({
    education: new FormControl('', [Validators.required]),
    school: new FormControl('', [Validators.required]),
    university: new FormControl('', [Validators.required])
  });

  addInfForm = new FormGroup({
    maritalStatus: new FormControl('', [Validators.required]),
    religion: new FormControl('', [Validators.required]),
    alcoholAttitude: new FormControl('', [Validators.required]),
    smokingAttitude: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
  }

}
