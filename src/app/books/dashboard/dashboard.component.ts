import { Component, OnInit } from '@angular/core';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { loadBooks } from '../store/book.actions';
import { selectAllBooks } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  currentTime: number;
  dateObj: Date;

  constructor(private rs: BookRatingService, private bs: BookStoreService, private store: Store) {
    setInterval(() => {
      this.currentTime = Date.now();
    }, 1000);
  }


  ngOnInit(): void {

    this.dateObj = new Date();
    this.store.dispatch(loadBooks());
    this.store.pipe(select(selectAllBooks)).subscribe(books => this.books = books);
   // this.fetchBooks();
  }

  private updateList(ratedBook: Book) {
    this.books = this.books.map(book => book.isbn === ratedBook.isbn ? ratedBook : book);
  }

  private fetchBooks(){
    this.bs.getAll().subscribe(books => { this.books = books; });
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.bs.updateRating(ratedBook.isbn, ratedBook.rating).subscribe();
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.bs.updateRating(ratedBook.isbn, ratedBook.rating).subscribe();
    this.updateList(ratedBook);
  }

  searchMethode(books: Book[]): Book[] {
    return null;
  }

  doDelete(book: Book){
    const deleteBook = this.bs.delete(book.isbn).subscribe();
  }

  doReset(){
    const reset = this.bs.deleteAll().subscribe();
  }

}
