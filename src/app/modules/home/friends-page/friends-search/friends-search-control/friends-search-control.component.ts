import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-search-control',
  templateUrl: './friends-search-control.component.html',
  styleUrls: ['./friends-search-control.component.scss']
})
export class FriendsSearchControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchFriends(data) {
    console.log(data);
  }
}
