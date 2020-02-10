import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderOverviewComponent} from './order-overview/order-overview.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GeneralInfoComponent} from './general-info/general-info.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [
    OrderOverviewComponent,
    GeneralInfoComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [OrderOverviewComponent]
})
export class OrderModule {
}
