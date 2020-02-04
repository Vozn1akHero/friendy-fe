import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
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
export class SettingsPanelInputComponent implements ControlValueAccessor, OnInit{
  @Input() invalid: boolean;
  @Input() initValue: any;
  @Input() additionalStyles;
  @ViewChild('input') input: ElementRef;

  changeValue($event){
    this.propagateChange($event.target.value);
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
    this.propagateChange(this.initValue);
    /*if (this._value == null) {
      this._value = this.initValue;
      this.propagateChange(this.initValue);
    }*/
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(val){
    if(val){
      this.propagateChange(val);
    }
  }

  ngOnInit(): void {
    this.input.nativeElement.value = this.initValue;
  }
}
