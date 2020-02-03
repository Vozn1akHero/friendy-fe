import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent {
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
}
