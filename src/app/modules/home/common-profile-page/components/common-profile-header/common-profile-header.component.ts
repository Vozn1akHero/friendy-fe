import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import User from '../../../../../data/models/user.model';
import {ImageService} from '../../../../../shared/services/image.service';

@Component({
  selector: 'app-common-profile-header',
  templateUrl: './common-profile-header.component.html',
  styleUrls: ['./common-profile-header.component.scss']
})
export class CommonProfileHeaderComponent implements OnInit {
  @Input() userData : User;
  private _loading : boolean;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
  }

}
