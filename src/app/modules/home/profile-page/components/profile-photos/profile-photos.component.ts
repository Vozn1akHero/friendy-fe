import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.scss']
})
export class ProfilePhotosComponent implements OnInit {
  @Input() isUserProfileOwner : boolean;
  constructor() { }

  ngOnInit() {
  }

}
