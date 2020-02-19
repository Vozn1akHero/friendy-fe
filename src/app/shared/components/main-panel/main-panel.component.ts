import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  @Input() panelContent:any = {
    title: null,
    icon: null,
    link: null,
    iconClass: null,
    queryParams: null,
    marginTop: false
  };
  @Input() panelStyles = {
    width: '100%'
  };
  @Input() contentColumned: boolean = true;
  @Input() contentStyles;
  contentAllStyles;
  @Input() forSubjectEntries: boolean = false;

  ngOnInit(): void {
    this.contentAllStyles = {
      flexDirection: this.contentColumned ? 'column': 'row',
      ...this.contentStyles
    };
  }
}
