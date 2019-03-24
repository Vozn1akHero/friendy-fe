import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-groups-all',
  templateUrl: './groups-all.component.html',
  styleUrls: ['./groups-all.component.scss']
})
export class GroupsAllComponent implements OnInit {
  @Input() typeOfGroupsToShow;

  constructor() { }

  ngOnInit() {
  }

}
