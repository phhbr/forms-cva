import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  @ViewChild(FormGroupDirective, {static: false}) formDirective: FormGroupDirective;
  private formSubmitted: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  onFormSubmitted() {
    console.log(this.form);
    this.formSubmitted = this.form.valid;
  }

  onCancelClicked() {

  }
}
