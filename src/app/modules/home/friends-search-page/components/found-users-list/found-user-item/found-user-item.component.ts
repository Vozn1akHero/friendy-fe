import {Component, Input, OnInit} from '@angular/core';
import FoundUserModel from '../../../models/found-user.model';

@Component({
  selector: 'app-found-user-item',
  templateUrl: './found-user-item.component.html',
  styleUrls: ['./found-user-item.component.scss']
})
export class FoundUserItemComponent implements OnInit {
  @Input() foundUserData: FoundUserModel;

  constructor() { }

  ngOnInit() {
  }

}
