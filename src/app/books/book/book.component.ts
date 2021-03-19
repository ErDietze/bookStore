import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();
  @Output() deleteBook = new EventEmitter<Book>();

  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {

  }

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }

  doDelete() {
    if (confirm(`Soll das Buch mit der ISBN: ${this.book.isbn}\nund dem Titel: \"${this.book.title}\" wirklich gelöscht werden?`)) {
      this.deleteBook.emit(this.book);
    }
  }
}
