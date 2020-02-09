import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel-for-entry-presenting',
  templateUrl: './panel-for-entry-presenting.component.html',
  styleUrls: ['./panel-for-entry-presenting.component.scss']
})
export class PanelForEntryPresentingComponent implements OnInit {
  @Input() rowDirection: boolean = true;
  @Input() panelContent = {
    title: null,
    icon: null,
    link: null,
    queryParams: null,
    marginTop: false
  };

  @Input() panelStyles = {
    width: '100%'
  };

  @Input() contentSecStyles : {[p:string]: string};
  
  constructor() { }

  ngOnInit() {
  }

}
