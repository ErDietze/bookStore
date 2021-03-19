import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books`); // template string
  }

  getSingleBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/books/${isbn}`);
  }

  create(book: Book): Observable<any> {
    return this.http.post(`${this.api}/book`, book);
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books/search/${term}`);
  }

  delete(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`);
  }

  deleteAll(): Observable<any> {
    // Resets store to initial state
    return this.http.delete(`${this.api}/books`);
  }

  updateRating(isbn: string, rate: number): Observable<any> {
    return this.http.post(`${this.api}/book/${isbn}/rate`, { rating: rate });
  }


}
