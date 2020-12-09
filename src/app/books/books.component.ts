import {Component, Injectable, OnInit} from '@angular/core';
import {BookService} from './add-new-book/BookService/bookService';
import {Book} from './add-new-book/BookService/book';

@Component({
  selector: 'app-books',
  templateUrl:'./books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  constructor(private bookService: BookService) {

  }
  bookList = this.bookService.getBooks();

  ngOnInit(): void {
  }

  addItem(Book: any) {
    this.bookList.push(Book);
  }
}
