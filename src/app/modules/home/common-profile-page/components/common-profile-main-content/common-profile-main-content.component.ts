import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-common-profile-main-content',
  templateUrl: './common-profile-main-content.component.html',
  styleUrls: ['./common-profile-main-content.component.scss']
})
export class CommonProfileMainContentComponent implements OnInit {
  @Input() activeSettings : boolean;

  constructor() { }

  ngOnInit() {
  }

}
