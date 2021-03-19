import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = {
      isbn: '1',
      title: 'Test',
      description: 'testdescription',
      price: 1,
      rating: 3
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event for doRateUp()', () => {
    // Arrange
    let emittedBook: Book;

    component.rateUp.subscribe(book => {
      emittedBook = book;
    });
    // Act
    component.doRateUp();

    // Assert
    expect(emittedBook).toBeTruthy(); // expect(emittedBook).not.toBe(undefined);
    expect(emittedBook).toBe(component.book);
  });

  it('should emit event for doRateDown()', () => {
    // Arrange
    let emittedBook: Book;

    component.rateDown.subscribe(book => {
      emittedBook = book;
    });
    // Act
    component.doRateDown();

    // Assert
    expect(emittedBook).toBeTruthy(); // expect(emittedBook).not.toBe(undefined);
    expect(emittedBook).toBe(component.book);
  });
});
