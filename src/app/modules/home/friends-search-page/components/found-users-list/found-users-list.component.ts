import { Component, OnInit } from '@angular/core';
import FoundUser from '../../models/found-user.model';

@Component({
  selector: 'app-found-users-list',
  templateUrl: './found-users-list.component.html',
  styleUrls: ['./found-users-list.component.scss']
})
export class FoundUsersListComponent implements OnInit {
  foundUsers: any[] = [{
    avatar: 1,
    name: "test",
    surname: "test2"
  }]

  constructor() { }

  ngOnInit() {
  }

}
