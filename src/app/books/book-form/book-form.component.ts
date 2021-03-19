import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  @Output() submitBook = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      rating: new FormControl(1, [Validators.min(1), Validators.max(5)]),
      price: new FormControl(1, Validators.minLength(1))
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.touched && control.invalid;
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.hasError(errorCode) && control.touched;
  }

  submitForm() {
    // da selbe Struktur
    const book: Book = { ...this.bookForm.value };

    // Einzelne Zuweisung der Werte
    // const formValue = this.bookForm.value;
    // const book2: Book = {
    //  isbn: formValue.isbn,
    //  title: formValue.title,
    //  description: formValue.description,
    // rating: formValue.rating,
    // price: formValue.price
    // };

    this.submitBook.emit(book);
  }

}
