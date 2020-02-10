import {NgModule} from '@angular/core';
import {BookOverviewComponent} from './book-overview/book-overview.component';
import {SharedModule} from '@shared/shared.module';
import {BookDetailsComponent} from './book-details/book-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  ErrorStateMatcher,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [MatFormFieldModule],
  declarations: [BookOverviewComponent, BookDetailsComponent],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class BookModule {
}
