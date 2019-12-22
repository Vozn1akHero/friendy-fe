import {Component, Input, OnInit} from '@angular/core';
import ExemplaryPhotoModel from '../../../models/exemplary-photo.model';

@Component({
  selector: 'app-profile-photos-item',
  templateUrl: './profile-photos-item.component.html',
  styleUrls: ['./profile-photos-item.component.scss']
})
export class ProfilePhotosItemComponent implements OnInit {
  @Input() photoContent: ExemplaryPhotoModel;

  constructor() { }

  ngOnInit() {
  }

}
