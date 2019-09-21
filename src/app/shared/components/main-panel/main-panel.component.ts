import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  @Input() panelContent = {
    title: null,
    icon: null,
    link: null,
    additionalStyles: { width: '379px' },
    marginTop: false
  };

  constructor() { }

  ngOnInit() {
  }

}
