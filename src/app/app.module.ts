import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { BookComponent } from './books/book/book.component';
import { AboutComponent } from './home/about/about.component';
import { AuthorComponent } from './authors/author/author.component';
import { AddNewBookComponent } from './books/add-new-book/add-new-book.component';
import {AdminModule} from './home/AdminModule/AdminModule';
import {BookService} from './books/add-new-book/BookService/bookService';
import {BookLogging} from './books/add-new-book/BookService/bookLogging';
import {AuthorService} from './authors/author/authorService';
import {AuthenticationService} from './home/AdminModule/auth.service';
import {UserService} from './home/AdminModule/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorsComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    AboutComponent,
    AuthorComponent,
    AddNewBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [BookService, BookLogging, AuthorService, AuthenticationService, UserService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
