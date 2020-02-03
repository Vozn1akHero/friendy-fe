import {Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-settings-panel-input',
  templateUrl: './settings-panel-input.component.html',
  styleUrls: ['./settings-panel-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SettingsPanelInputComponent),
      multi: true
    }
  ]
})
export class SettingsPanelInputComponent implements ControlValueAccessor {
  @Input() invalid: boolean;
  inputVal: string;
  _value;
  @Input() additionalStyles;

  changeValue(){
    this.propagateChange(this.inputVal);
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
