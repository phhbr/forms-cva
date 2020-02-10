import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface SelectBoxItem {
  name: string;
  id: number;
}

@Component({
  selector: 'app-customized-select-box',
  templateUrl: './customized-select-box.component.html',
  styleUrls: ['./customized-select-box.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomizedSelectBoxComponent),
    multi: true
  }]
})
export class CustomizedSelectBoxComponent implements OnInit, ControlValueAccessor {

  @Input() items: SelectBoxItem[] = [];
  form: FormControl = new FormControl();

  constructor() {
  }

  ngOnInit() {

  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe((change) => fn(change));
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: SelectBoxItem): void {
    console.log(obj);
    this.form.setValue(obj);
  }
}
