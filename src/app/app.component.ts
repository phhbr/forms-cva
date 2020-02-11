import {Component} from '@angular/core';
import {BookGenresService} from '@book/book-genres.service';
import {Genre} from '@book/genre';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dropdownvalue: Genre;
  items$ = this.service.getGenres();
  form: FormControl = new FormControl();
  formGroup: FormGroup = new FormGroup({formgroup: new FormControl()});

  constructor(private service: BookGenresService) {

  }
}
