import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-row-in-settings-panel',
  templateUrl: './row-in-settings-panel.component.html',
  styleUrls: ['./row-in-settings-panel.component.scss']
})
export class RowInSettingsPanelComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
