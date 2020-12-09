import { Component, OnInit } from '@angular/core';
import {AuthorService} from './author/authorService';

@Component({
  selector: 'app-authors',
  templateUrl:'./authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private authorService: AuthorService ) { }
  authorList = this.authorService.getAuthors();
  ngOnInit(): void {
  }

}
