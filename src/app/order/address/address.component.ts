import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddressComponent),
    multi: true
  }]
})
export class AddressComponent implements OnInit, ControlValueAccessor {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      street: new FormControl(),
      zipCode: new FormControl(),
      city: new FormControl()
    });
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
