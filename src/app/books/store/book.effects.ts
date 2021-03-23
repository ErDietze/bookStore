import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { config, of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import * as BookActions from './book.actions';

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BookActions.loadBooks),
      concatMap(() =>
        this.bs.getAll().pipe(
          map(data => BookActions.loadBooksSuccess({ data })),
          catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });

  loadSingleBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadSingleBook),
      switchMap(action => this.bs.getSingleBook(action.isbn).pipe(
        map(data => BookActions.loadSingleBookSuccess({ data })),
        catchError(error => of(BookActions.loadSingleBookFailure({ error })))
      ))
    );
  });

  createBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.createBook),
      concatMap(action => this.bs.create(action.book).pipe(
        map(book => BookActions.createBookSuccess({ book })),
        catchError(error => of(BookActions.createBookFailure({ error })))
      ))
    );
  }, { dispatch: false });

  deleteBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.deleteBook),
      concatMap(action => this.bs.delete(action.isbn))
    );
  });

  deletAllBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.deleteAllBooks),
      concatMap(() => this.bs.deleteAll().pipe(
        map(() => BookActions.deleteAllBooksSuccess()),
        catchError(error => of(BookActions.deleteAllBooksFailure({ error })))
      ))
    );
  });

  constructor(private actions$: Actions, private bs: BookStoreService) { }

}
