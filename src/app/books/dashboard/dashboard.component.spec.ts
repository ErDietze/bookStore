import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;
  let ratingMock: Partial<BookRatingService>;
  let ratingMock2: Partial<BookRatingService>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        // Stelle BRS zur Verfügung. Wenn jemand BRS anfordert, liefere
        // Inhalt der Variable "ratingMock" aus
        { provide: BookRatingService, useValues: { ratingMock, ratingMock2 } }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    book = {
      isbn: '1',
      title: 'Test',
      description: 'testdescription',
      price: 1,
      rating: 3
    };

    ratingMock = {
      rateUp(book: Book) { return book; }
    };
    ratingMock2 = {
      rateDown(book: Book) { return book; }
    };
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should call the service fo rateUp', () => {
    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough(); // Aufruf an das Objekt "rs" durchleiten

    // Act
    component.doRateUp(book);

    // Assert
    expect(rs.rateUp).toHaveBeenCalled();
  });

  it('it should call the service fo rateUp', () => {
    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateDown').and.callThrough(); // Aufruf an das Objekt "rs" durchleiten
    component.doRateDown(book);
    expect(rs.rateDown).toHaveBeenCalled();
  }); */
});
