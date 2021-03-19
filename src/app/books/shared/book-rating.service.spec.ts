import { TestBed } from '@angular/core/testing';
import { Book } from './book';

import { BookRatingService } from './book-rating.service';

describe('BookRatingService', () => {
  let service: BookRatingService;
  let bookTest: Book;

  beforeEach(() => {
    // Arrange
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);
    bookTest = { isbn: '1', title: 'Test', description: 'testdescription', price: 1, rating: 3 };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should rate up by one', () => {
    // Act
    bookTest.rating = 3;
    const bookUp = service.rateUp(bookTest);

    // Assert
    expect(bookUp.rating).toBe(4); // nicht gut: toBe(book.rating + 1)
  });

  it('it should rate down by one', () => {
    bookTest.rating = 3;
    const bookDown = service.rateDown(bookTest);
    expect(bookDown.rating).toBe(2);
  });

  it('it should not rate higher than five', () => {
    bookTest.rating = 5;
    const bookRatingMax = service.rateUp(bookTest);
    expect(bookRatingMax.rating).toBe(5);
  });

  it('it should not rate lower than one', () => {
    bookTest.rating = 1;
    const bookRatingMin = service.rateDown(bookTest);
    expect(bookRatingMin.rating).toBe(1);
  });

  it('it should return null if input is not defined for rateUp ', () => {
    const bookNull = service.rateUp(null);
    expect(bookNull).toBeNull();
  });

  it('it should return null if input is not defined for rateDown ', () => {
    const bookNull = service.rateDown(null);
    expect(bookNull).toBeNull();
  });

});
