import {Injectable} from '@angular/core';
import {Author} from './author';

@Injectable()
export class AuthorService {
  constructor(){
  }
  getAuthors(){
    let authorList: Author[];
    authorList = [
      new Author('Martin Fowler', '18 december 1963',
        'https://upload.wikimedia.org/wikipedia/commons/e/e2/Webysther_20150414193208_-_Martin_Fowler.jpg', ),
      new Author('Bjarne Stroustrup', '30 december 1950',
        'https://www.stroustrup.com/Bjarne2018.jpg', ),
      new Author('Joshua Bloch', '28 august 1961',
        'https://s3-people.ozstatic.by/200/145/901/901145_0.jpg', ),
    ];


    return authorList;
  }

}
