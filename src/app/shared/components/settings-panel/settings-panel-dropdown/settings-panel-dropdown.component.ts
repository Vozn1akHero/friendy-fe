import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-settings-panel-dropdown',
  templateUrl: './settings-panel-dropdown.component.html',
  styleUrls: ['./settings-panel-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SettingsPanelDropdownComponent),
      multi: true
    }
  ]
})
export class SettingsPanelDropdownComponent implements ControlValueAccessor {
  @Input() invalid: boolean;
  @Input() initValue: any;
  @Input() placeholder: string;
  @Input() options: any[];
  @Input() additionalStyles;
  selectedOption: any;
  _value;

  changeValue(){
    this.propagateChange(this.selectedOption);
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(val){
    if(val){
      this._value = val;
      this.propagateChange(this._value);
    }
  }
}
