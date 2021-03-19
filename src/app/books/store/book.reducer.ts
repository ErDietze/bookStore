import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../shared/book';
import * as BookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface State {

  books: Book[];
  loading: boolean;
  bookToCreate: Book;
  isbnToDelete: string;

}

export const initialState: State = {
  books: [],
  loading: false,
  bookToCreate: { isbn: '', description: '', price: 0, rating: 0, title: '' },
  isbnToDelete: ''
};


export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => {
    return { ...state, loading: true };
  }),
  on(BookActions.loadBooksSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      books: action.data
    };
  }),
  on(BookActions.loadBooksFailure, (state, action) => {
    return {
      ...state,
      loading: false
    };
  }),
  on(BookActions.createBook, (state, action: { book }) => {
    return {
      ...state,
      loading: true,
      bookToCreate: action.book
    };
  }),
  on(BookActions.createBookSuccess, (state, action: { book }) => {
    return {
      ...state,
      loading: false,
      bookToCreate: action.book
    };
  }),
  on(BookActions.createBookFailure, (state, action) => {
    return {
      ...state,
      loading: false
    };
  }),
  on(BookActions.deleteBook, (state, action) => {
    return {
      ...state,
      loading: true,
      isbnToDelete: action.isbn
    };
  }),
  on(BookActions.deleteBookSuccess, (state, action) => {
    return {
      ...state,
      loading: false
    };
  }),
  on(BookActions.createBookFailure, (state, action) => {
    return {
      ...state,
      loading: false
    };
  }),
  on(BookActions.deleteAllBooks, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(BookActions.deleteAllBooksSuccess, (state, action) => {
    return {
      ...state,
      loading: false
    }
  }),
  on(BookActions.deleteAllBooksFailure, (state, action) => {
    return {
      ...state,
      loading: false
    }
  })

);

