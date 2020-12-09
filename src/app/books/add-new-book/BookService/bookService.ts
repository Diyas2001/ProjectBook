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
      new Book(1, 'The Pragmatic Programmer', 'David Thomas & Andrew Hunt',
        'https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg',
        'Your Journey To Mastery, 20th Anniversary Edition' ),
      new Book(2, 'Refactoring', 'Martin Fowler',
        'https://m.media-amazon.com/images/I/41odjJlPgHL.jpg',
        'Improving the Design of Existing Code )' ),
      new Book(3, 'Automate the Boring Stuff with Python', 'Al Sweigart',
        'https://m.media-amazon.com/images/I/51SYS7OOBkL.jpg',
        'Practical Programming for Total Beginners' ),
      new Book(4, 'Python Crash Course', 'Eric Matthes',
        'https://m.media-amazon.com/images/I/510-dE3N1PL.jpg',
        'A Hands-On, Project-Based Introduction to Programming' ),
      new Book(5, 'Effective Java', 'Joshua Bloch',
        'https://m.media-amazon.com/images/I/51wl8cINKYL.jpg',
        'How to Learn Programming Languages Quickly, Ace Your Programming Interview, and Land Your Software Developer Dream Job' ),
      new Book(6, 'A Tour of C++', 'Bjarne Stroustrup',
        'https://m.media-amazon.com/images/I/51YqN2aew6L.jpg',
        'The Ultimate Step By Step Guide To Programming With Python' )
    ];

    this.bookLogging.log('Number of loaded plants: ' + bookList.length);


    return bookList;
  }

}
