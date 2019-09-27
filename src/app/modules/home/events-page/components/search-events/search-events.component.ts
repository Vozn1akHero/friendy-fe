import {Component, OnInit, Output, EventEmitter, Renderer2, Input} from '@angular/core';

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

  }
}
