import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from './book';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookService {
  private static BOOK_URI = '/api/book';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Book> {
    return this.http.get<Book>(BookService.BOOK_URI);
  }

  findOne(id: number): Observable<Book> {
    return this.http.get<Book>(BookService.BOOK_URI + '/' + id);
  }

  save(bookToSave: Book): Observable<Book> {
    return this.http.post<Book>(BookService.BOOK_URI, bookToSave);
  }
}
