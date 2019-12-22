import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-header-minor-data',
  templateUrl: './profile-header-minor-data.component.html',
  styleUrls: ['./profile-header-minor-data.component.scss']
})
export class ProfileHeaderMinorDataComponent implements OnInit {
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
