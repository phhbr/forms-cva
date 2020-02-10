import {Component, forwardRef, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddressComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AddressComponent),
    multi: true
  }]
})
export class AddressComponent implements OnInit, ControlValueAccessor, Validator {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      street: new FormControl('', {validators: Validators.required}),
      zipCode: new FormControl('', {validators: Validators.required}),
      city: new FormControl('', {validators: Validators.required}),
    });
  }

  validate(control: FormGroup): ValidationErrors | null {
    return this.form.valid ? null : {invalidForm: {valid: false, message: 'address form is invalid'}};
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    obj && this.form.setValue(obj, {emitEvent: false});
  }
}
