import { Component, OnInit, Renderer2, ViewContainerRef, ViewChild } from '@angular/core';
import { EventsMineSearchComponent } from '../../events-list/events-mine-search/events-mine-search.component';

@Component({
  selector: 'app-search-events-control',
  templateUrl: './search-events-control.component.html',
  styleUrls: ['./search-events-control.component.scss']
})
export class SearchEventsControlComponent implements OnInit {
  constructor(private _renderer: Renderer2, private _vcRef: ViewContainerRef) { }

  ngOnInit() {
  }

  searchEvents():void{
      let firstInput = document.querySelector('* /deep/ #events__mine__search__input');
      let secondInput = document.getElementById("search-events__search__input");
  
      let secondInputWidth = getComputedStyle(secondInput).width;
  
      if(secondInputWidth === '16px'){
        this._renderer.setStyle(firstInput, 'width', '0');
        this._renderer.setStyle(secondInput, 'width', '340px');
      }
  }

}
