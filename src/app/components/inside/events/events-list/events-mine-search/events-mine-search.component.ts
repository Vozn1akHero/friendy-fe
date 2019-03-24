import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-events-mine-search',
  templateUrl: './events-mine-search.component.html',
  styleUrls: ['./events-mine-search.component.scss']
})
export class EventsMineSearchComponent implements OnInit {
  @Input() typeOfEventsToShow;

  constructor(private _renderer : Renderer2){
    
  }

  ngOnInit() {
  }

  searchEvents(){
    const firstInput = document.getElementById('events__mine__search__input');
    const secondInput = document.querySelector('* /deep/ #search-events__search__input');

    const firstInputWidth = getComputedStyle(firstInput).width;

    if (firstInputWidth === '16px') {
      this._renderer.setStyle(firstInput, 'width', '100%');
      this._renderer.setStyle(secondInput, 'width', '0');
    }
  }
}
