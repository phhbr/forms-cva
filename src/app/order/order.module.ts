import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderOverviewComponent} from './order-overview/order-overview.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GeneralInfoComponent} from './general-info/general-info.component';


@NgModule({
  declarations: [
    OrderOverviewComponent,
    GeneralInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [OrderOverviewComponent]
})
export class OrderModule {
}
