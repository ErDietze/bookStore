import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchFormControl: FormControl;
  books$: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.searchFormControl = new FormControl('');

    this.books$ = this.searchFormControl.valueChanges.pipe(
      debounceTime(1000),
      filter(term => term.length > 2),
      switchMap(term => this.bs.search(term))
    );
  }

}
