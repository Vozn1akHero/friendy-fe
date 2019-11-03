import {Component, Input, OnInit} from '@angular/core';
import FoundUser from '../../models/found-user.model';
import {ActivatedRoute} from '@angular/router';
import FoundUserModel from '../../models/found-user.model';

@Component({
  selector: 'app-found-users-list',
  templateUrl: './found-users-list.component.html',
  styleUrls: ['./found-users-list.component.scss']
})
export class FoundUsersListComponent implements OnInit {
  @Input() userList: FoundUserModel[];

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {

  }
}
