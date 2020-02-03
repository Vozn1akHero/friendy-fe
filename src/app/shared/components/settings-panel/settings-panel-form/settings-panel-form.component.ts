import {Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, Validators
} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-settings-panel-form',
  templateUrl: './settings-panel-form.component.html',
  styleUrls: ['./settings-panel-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SettingsPanelFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SettingsPanelFormComponent),
      multi: true
    }
  ]
})
export class SettingsPanelFormComponent implements ControlValueAccessor, OnDestroy, OnInit {
  @Input() form: FormGroup;
  subscriptions: Subscription[] = [];
  @Output() formSubmitEmitter: EventEmitter<void> = new EventEmitter<void>();

  get value() {
    return this.form.value;
  }

  set value(value) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get emailControl() {
    return this.form.controls.email;
  }

  constructor() {
    // create the inner form


    /*this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );*/
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    return this.form.valid;
  }

  onClick() {
    this.formSubmitEmitter.emit();
  }
}
