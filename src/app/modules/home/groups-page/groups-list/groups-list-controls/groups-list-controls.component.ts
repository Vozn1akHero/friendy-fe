import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-groups-list-controls',
  templateUrl: './groups-list-controls.component.html',
  styleUrls: ['./groups-list-controls.component.scss']
})
export class GroupsListControlsComponent implements OnInit {
  @Input() typeOfGroupsToShow;
  @Output() changeConcreteTypeOfGroups : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  showConcreteTypeOfGroups(value) {
    this.changeConcreteTypeOfGroups.emit(value);
  }
}
