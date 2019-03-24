import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-profile-main-content',
  templateUrl: './profile-main-content.component.html',
  styleUrls: ['./profile-main-content.component.scss']
})
export class ProfileMainContentComponent implements OnInit {
  @Input() activeSettings : boolean;

  constructor() { }

  ngOnInit() {
  }

}
