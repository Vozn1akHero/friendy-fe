import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-education-settings',
  templateUrl: './user-education-settings.component.html',
  styleUrls: ['./user-education-settings.component.scss']
})
export class UserEducationSettingsComponent implements OnInit {
  userEducationForm = new FormGroup({
    education: new FormControl('', [Validators.required]),
    school: new FormControl('', [Validators.required]),
    university: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

}
