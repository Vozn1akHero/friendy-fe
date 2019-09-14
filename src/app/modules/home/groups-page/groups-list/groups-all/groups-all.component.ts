import {Component, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-groups-all',
  templateUrl: './groups-all.component.html',
  styleUrls: ['./groups-all.component.scss']
})
export class GroupsAllComponent implements OnInit {
  @Input() typeOfGroupsToShow;

  constructor(private _renderer : Renderer2) { }

  ngOnInit() {
  }

  searchGroups() {
    const firstInput = document.getElementById('search-input');
    const secondInput = document.querySelector('* /deep/ #mini-search-input');

    const firstInputWidth = getComputedStyle(firstInput).width;

    if (firstInputWidth === '16px') {
      this._renderer.setStyle(firstInput, 'width', '100%');
      this._renderer.setStyle(secondInput, 'width', '0');
    }
  }
}
