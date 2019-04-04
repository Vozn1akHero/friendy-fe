import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-header-bg-alter',
  templateUrl: './profile-header-bg-alter.component.html',
  styleUrls: ['./profile-header-bg-alter.component.scss']
})
export class ProfileHeaderBgAlterComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }

}
