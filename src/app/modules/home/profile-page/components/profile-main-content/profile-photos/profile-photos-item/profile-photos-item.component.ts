import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-photos-item',
  templateUrl: './profile-photos-item.component.html',
  styleUrls: ['./profile-photos-item.component.scss']
})
export class ProfilePhotosItemComponent implements OnInit {
  @Input() photoContent = {
    href: String, src : String
  };

  constructor() { }

  ngOnInit() {
  }

}
