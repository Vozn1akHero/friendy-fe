import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-header-basic-data',
  templateUrl: './profile-header-basic-data.component.html',
  styleUrls: ['./profile-header-basic-data.component.scss']
})
export class ProfileHeaderBasicDataComponent implements OnInit {
  @Input() activeSettings : boolean;
  @Input() isUserProfileOwner : boolean;
  @Input() name: string;
  @Input() surname: string;
  @Input() status: string;
  @Input() city: string;
  @Input() birthday: string;

  constructor() { }

  ngOnInit() {
  }

}
