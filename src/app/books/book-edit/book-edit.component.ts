import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  constructor(private bs: BookStoreService, private router: Router) { }

  ngOnInit(): void {
  }

}
