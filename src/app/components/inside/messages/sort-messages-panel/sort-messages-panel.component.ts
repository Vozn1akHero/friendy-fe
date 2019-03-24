import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-messages-panel',
  templateUrl: './sort-messages-panel.component.html',
  styleUrls: ['./sort-messages-panel.component.scss']
})
export class SortMessagesPanelComponent implements OnInit {
  sortMethods = ['all', 'read', 'unread'];
  sortMethod = this.sortMethods[0];

  constructor() { }

  ngOnInit() {
  }

  changeSortMethod(type) {
    this.sortMethod = this.sortMethods[type];
  }

}
