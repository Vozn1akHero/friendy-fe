import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controls-wrapper-in-settings-panel',
  templateUrl: './controls-wrapper-in-settings-panel.component.html',
  styleUrls: ['./controls-wrapper-in-settings-panel.component.scss']
})
export class ControlsWrapperInSettingsPanelComponent implements OnInit {
  @Output() formSubmitEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.formSubmitEmitter.emit();
  }
}
