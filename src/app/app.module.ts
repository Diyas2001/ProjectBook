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
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { AddNewBookComponent } from './books/add-new-book/add-new-book.component';
import {AdminModule} from './home/AdminModule/AdminModule';
import {LikePipe} from './books/book/LikePipe';

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
    LoginComponent,
    RegistrationComponent,
    AddNewBookComponent,
    LikePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
