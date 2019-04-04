import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  @Input() activeSettings;
  @Output() openProfileInnerSettingsChild: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openProfileInnerSettingsFromComponent(): void {
    this.activeSettings = this.activeSettings !== true;
    this.openProfileInnerSettingsChild.emit(this.activeSettings);
  }

}
