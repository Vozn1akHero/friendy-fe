import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-other-settings',
  templateUrl: './user-other-settings.component.html',
  styleUrls: ['./user-other-settings.component.scss']
})
export class UserOtherSettingsComponent implements OnInit {
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
