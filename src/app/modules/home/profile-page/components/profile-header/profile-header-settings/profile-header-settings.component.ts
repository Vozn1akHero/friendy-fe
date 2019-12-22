import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-profile-header-settings',
  templateUrl: './profile-header-settings.component.html',
  styleUrls: ['./profile-header-settings.component.scss']
})
export class ProfileHeaderSettingsComponent implements OnInit {
  @Input() activeSettings: boolean;
  @Output() toggleActiveSettingsEmitter : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleActiveSettings() {
    this.activeSettings = !this.activeSettings;
    this.toggleActiveSettingsEmitter.emit(this.activeSettings);
  }

  changeUserData() {
    //console.log(this.userStatus, this.changedProfileAvatar, this.changedProfileBg);
  }
}
