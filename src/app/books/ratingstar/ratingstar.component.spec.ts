import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingstarComponent } from './ratingstar.component';

describe('RatingstarComponent', () => {
  let component: RatingstarComponent;
  let fixture: ComponentFixture<RatingstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingstarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
