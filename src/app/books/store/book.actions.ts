import { createAction, props } from '@ngrx/store';
import { Book } from '../shared/book';

export const loadBooks = createAction(
  '[Book] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ data: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: any }>()
);

export const createBook = createAction(
  '[Book] Create Book',
  props<{ book: Book }>()
);

export const createBookSuccess = createAction(
  '[Book] Create Book Success',
  props<{ book: Book }>()
);

export const createBookFailure = createAction(
  '[Book] Create Book Failure',
  props<{ error: any }>()
);

export const deleteBook = createAction(
  '[Book] delete Book',
  props<{ isbn: string }>()
);

export const deleteBookSuccess = createAction(
  '[Book] delete Book');

export const deleteBookFailure = createAction(
  '[Book] delete Book',
  props<{ error: any }>()
);

export const deleteAllBooks = createAction(
  '[Book] delete all Books -> zurücksetzen auf ausgangspunkt'
);

export const deleteAllBooksSuccess = createAction(
  '[Book] delete all Books success -> Ausgangspunkt wieder hergestellt'
);

export const deleteAllBooksFailure = createAction(
  '[Book] delete all Books failed',
  props<{error: any}>()
)
