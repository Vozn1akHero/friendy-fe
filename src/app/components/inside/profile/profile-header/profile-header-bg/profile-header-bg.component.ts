import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-header-bg',
  templateUrl: './profile-header-bg.component.html',
  styleUrls: ['./profile-header-bg.component.scss']
})
export class ProfileHeaderBgComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }

}
