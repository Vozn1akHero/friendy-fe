import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-events-search-panel',
  templateUrl: './events-search-panel.component.html',
  styleUrls: ['./events-search-panel.component.scss']
})
export class EventsSearchPanelComponent implements OnInit {
  @ViewChild('panel') panel : ElementRef;
  @ViewChild('toggleBtn') toggleBtn : ElementRef;
  eventSearchPanelExpanded: boolean = false;

  constructor() { }

  ngOnInit() {
    this.panel.nativeElement.style.boxShadow = '0 0px 6px 0px rgba(0, 0, 0, 0.1)';
    this.panel.nativeElement.style.toggleBtn = '0 0px 6px 0px rgba(0, 0, 0, 0.1)';
  }

  onToggleBtnClick(){
    if(this.eventSearchPanelExpanded) {
      this.panel.nativeElement.style.width = '2rem';
      this.panel.nativeElement.style.boxShadow = '0 0px 6px 0px rgba(0, 0, 0, 0.1)';
      this.panel.nativeElement.style.toggleBtn = '0 0px 6px 0px rgba(0, 0, 0, 0.1)';
      this.eventSearchPanelExpanded = false;
    } else {
      this.panel.nativeElement.style.width = '20rem';
      this.panel.nativeElement.style.boxShadow = 'none';
      this.panel.nativeElement.style.toggleBtn = 'none';
      this.eventSearchPanelExpanded = true;
    }
  }
}
