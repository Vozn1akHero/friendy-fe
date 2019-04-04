import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-avatar-alter',
  templateUrl: './profile-avatar-alter.component.html',
  styleUrls: ['./profile-avatar-alter.component.scss']
})
export class ProfileAvatarAlterComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }

}
