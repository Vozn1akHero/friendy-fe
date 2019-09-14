import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss']
})
export class GroupsPageComponent implements OnInit {
  searchGroupsInputOpened = false;
  groupCreationPopupOpened = false;
  // @ts-ignore
  daysOfMonth = this.getDaysOfMonth();

  getDaysOfMonth() {
    return Array.apply(null, Array(5)).map((_, i) => i + 1);
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  openOrCloseGroupCreationPopup() {
    this.groupCreationPopupOpened = this.groupCreationPopupOpened === false;
  }

}
