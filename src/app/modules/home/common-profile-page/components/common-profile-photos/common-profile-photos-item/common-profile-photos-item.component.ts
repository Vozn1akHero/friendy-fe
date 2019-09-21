import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-common-profile-photos-item',
  templateUrl: './common-profile-photos-item.component.html',
  styleUrls: ['./common-profile-photos-item.component.scss']
})
export class CommonProfilePhotosItemComponent implements OnInit {
  @Input() photoContent = {
    href: String, src : String
  };

  constructor() { }

  ngOnInit() {
  }

}
