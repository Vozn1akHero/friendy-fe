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
  @Input() initValue: any;
  //@ViewChild() d
  textVal: string;
  _value;

  changeValue($event){
    this.propagateChange($event.target.value);
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
    this.propagateChange(this.initValue);
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(val){
    if(val){
      this.propagateChange(val);
    }
  }
}
