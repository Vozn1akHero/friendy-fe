import {Component, OnInit, Renderer2, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-search-groups-control',
  templateUrl: './search-groups-control.component.html',
  styleUrls: ['./search-groups-control.component.scss']
})
export class SearchGroupsControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSearchGroup(data) {
    console.log(data);
  }

}
