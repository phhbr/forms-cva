import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
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
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

}
