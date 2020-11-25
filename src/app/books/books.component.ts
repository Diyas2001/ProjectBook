import {Component, Injectable, OnInit} from '@angular/core';
import {BookService} from './add-new-book/BookService/bookService';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList: any;


  constructor() {

  }


  ngOnInit(): void {
  }

  addItem($event: any) {
    
  }
}
