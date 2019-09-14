import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  typeOfGroupsToShow: string = 'all';

  constructor() {
  }

  ngOnInit() {
  }

  showConcreteTypeOfGroups(value): void {
    this.typeOfGroupsToShow = value;
  }
}
