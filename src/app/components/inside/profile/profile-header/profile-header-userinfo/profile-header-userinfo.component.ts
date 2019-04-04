import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-profile-header-userinfo',
  templateUrl: './profile-header-userinfo.component.html',
  styleUrls: ['./profile-header-userinfo.component.scss']
})
export class ProfileHeaderUserinfoComponent implements OnInit {
  @Input() activeSettings;
  @Output() openProfileInnerSettings: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openProfileInnerSettingsChild(value): void {
    this.openProfileInnerSettings.emit(value);
  }

}
