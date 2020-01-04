import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import User from '../../../models/user.model';

@Component({
  selector: 'app-profile-info-panel',
  templateUrl: './profile-info-panel.component.html',
  styleUrls: ['./profile-info-panel.component.scss']
})
export class ProfileInfoPanelComponent implements OnInit {
  @Input() userData: User;
  @Input() activeSettings: boolean;
  @Input() isUserProfileOwner : boolean;
  @Input() userId: number;
  @Input() isUserOnline: boolean;
  @Output() toggleSettingsEm: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleActiveSettings(value: boolean){
    this.toggleSettingsEm.emit(value);
  }
}
