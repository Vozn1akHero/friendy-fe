import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-row-content-in-settings-panel',
  templateUrl: './row-content-in-settings-panel.component.html',
  styleUrls: ['./row-content-in-settings-panel.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RowContentInSettingsPanelComponent implements OnInit {
  @Input() columnAlignment: boolean;

  constructor() { }

  ngOnInit() {
  }

}
