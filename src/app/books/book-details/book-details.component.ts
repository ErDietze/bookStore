import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
// tslint:disable: deprecation
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book: Book;

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService, private router: Router) { }

  ngOnInit(): void {
    /* synchroner Weg
     const isbn = this.route.snapshot.paramMap.get('isbn'); // in get kommt der Parametername welcher im path hinter books steht
     console.log(isbn); */

    /* asynchroner Weg besserer weg umd die url zu aktualisieren ohne erst auf das Dashboard gehen zu müssen*/
    // TODO verschachtelte Subscriptions vermeiden!
    // this.route.paramMap.subscribe(params => {
    //  this.isbn = params.get('isbn');
    //  this.bs.getSingleBook(this.isbn).subscribe(book => this.book = book);
    // });

    // this.route.paramMap.pipe(
    //  map(params => params.get('isbn')),
    //  switchMap(isbn => this.bs.getSingleBook(isbn))
    // ).subscribe(book => this.book = book);

    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')),
      switchMap(isbn => this.bs.getSingleBook(isbn))
    );


  }


  changeZuEdit() {
    this.router.navigateByUrl(`/books/${this.book.isbn}/edit`);
    console.log('hallo');
  }
}
