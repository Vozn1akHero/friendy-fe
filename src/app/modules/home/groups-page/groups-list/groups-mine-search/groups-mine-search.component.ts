import {Component, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-groups-mine-search',
  templateUrl: './groups-mine-search.component.html',
  styleUrls: ['./groups-mine-search.component.scss']
})
export class GroupsMineSearchComponent implements OnInit {
  @Input() typeOfGroupsToShow;

  constructor(private _renderer : Renderer2){

  }

  ngOnInit() {
  }

  searchGroups() {
    const firstInput = document.getElementById('groups__mine__search-input');
    const secondInput = document.querySelector('* /deep/ #search-groups__search__input');

    const firstInputWidth = getComputedStyle(firstInput).width;

    if (firstInputWidth === '16px') {
      this._renderer.setStyle(firstInput, 'width', '100%');
      this._renderer.setStyle(secondInput, 'width', '0');
    }
  }

  onSearchGroup(data) {
    console.log(data);
  }
}
