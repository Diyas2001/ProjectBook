import {Injectable} from '@angular/core';
import {Book} from './book';
import {BookLogging} from './bookLogging';

@Injectable()
export class BookService {
  constructor(private bookLogging: BookLogging){
  }
  getBooks(){
    let bookList: Book[];
    bookList = [
      new Book(1, 'The Pragmatic Programmer', 'David Thomas & Andrew Hunt', 0)
    ];

    this.bookLogging.log('Number of loaded plants: ' + bookList.length);


    return bookList;
  }

}
