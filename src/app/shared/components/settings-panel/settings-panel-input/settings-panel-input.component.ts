import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input, OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';

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
export class SettingsPanelInputComponent implements ControlValueAccessor, OnInit, OnDestroy{
  @Input() invalid: boolean;
  @Input() initValue: any;
  @Input() value$: Observable<any>;
  @Input() additionalStyles;
  @ViewChild('input') input: ElementRef;
  valueSubscription: Subscription;

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

  ngOnInit(): void {
    if(this.value$!=null) {
      this.valueSubscription = this.value$.subscribe(value => {
        this.input.nativeElement.value = value
      });
    } else {
      this.input.nativeElement.value = this.initValue;
    }
  }

  ngOnDestroy(): void {
    if(this.valueSubscription!=null) this.valueSubscription.unsubscribe();
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
