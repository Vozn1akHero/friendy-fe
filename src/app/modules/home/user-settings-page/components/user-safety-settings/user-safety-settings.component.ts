import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-safety-settings',
  templateUrl: './user-safety-settings.component.html',
  styleUrls: ['./user-safety-settings.component.scss']
})
export class UserSafetySettingsComponent implements OnInit {
  password: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  onNewPasswordSubmit() {

  }

  onNewEmailSubmit() {

  }
}
