import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-userinfo-basic',
  templateUrl: './profile-userinfo-basic.component.html',
  styleUrls: ['./profile-userinfo-basic.component.scss'],
  styles: [':host{ text-align: center; }']
})
export class ProfileUserinfoBasicComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }

}
