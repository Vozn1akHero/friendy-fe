import {Component, OnInit, Output, EventEmitter, Renderer2} from '@angular/core';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.scss']
})
export class SearchEventsComponent implements OnInit {
  constructor(private _renderer: Renderer2) { }

  ngOnInit() {
  }

  searchEvents():void{
    let firstInput = document.querySelector('* /deep/ #my-events-search-input');
    let secondInput = document.getElementById("search-events-input");

    let secondInputWidth = getComputedStyle(secondInput).width;

    if(secondInputWidth === '16px'){
      this._renderer.setStyle(firstInput, 'width', '0');
      this._renderer.setStyle(secondInput, 'width', '340px');
    }
  }
}
