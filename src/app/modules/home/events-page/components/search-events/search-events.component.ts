import {Component, OnInit, Output, EventEmitter, Renderer2, Input, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.scss']
})
export class SearchEventsComponent implements OnInit {
  searchInputText : string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  searchEvents():void{
    if(this.searchInputText.length === 0){
      this.router.navigate(['.'], {
        queryParams: {
          "ev_t": "participating"
        },
        relativeTo: this.route
      })
    } else {
      this.router.navigate(['.'], {
        queryParams: {
          keyword: this.searchInputText
        },
        relativeTo: this.route
      })
    }
  }
}
