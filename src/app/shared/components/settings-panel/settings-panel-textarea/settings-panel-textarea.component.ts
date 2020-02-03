import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-settings-panel-textarea',
  templateUrl: './settings-panel-textarea.component.html',
  styleUrls: ['./settings-panel-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SettingsPanelTextareaComponent),
      multi: true
    }
  ]
})
export class SettingsPanelTextareaComponent implements ControlValueAccessor {
  @Input() invalid: boolean;
  //@ViewChild() d
  textVal: string;
  _value;

  changeValue(){
    this.propagateChange(this.textVal);
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
