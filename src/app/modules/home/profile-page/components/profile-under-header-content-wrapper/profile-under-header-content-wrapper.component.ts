import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-under-header-content-wrapper',
  templateUrl: './profile-under-header-content-wrapper.component.html',
  styleUrls: ['./profile-under-header-content-wrapper.component.scss']
})
export class ProfileUnderHeaderContentWrapperComponent implements OnInit {
  @Input() activeSettings: boolean;
  @Input() isUserProfileOwner: boolean;
  @Input() userId: number;

  constructor() { }

  ngOnInit() {
  }

}
