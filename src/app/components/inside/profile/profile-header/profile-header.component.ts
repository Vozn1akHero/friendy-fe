import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() activeSettings: boolean;
  @Output() openProfileInnerSettings: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  openProfileInnerSettingsChild(): void {
    this.activeSettings = this.activeSettings !== true;
    this.openProfileInnerSettings.emit(this.activeSettings);
  }

}
